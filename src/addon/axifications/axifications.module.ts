// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { NgModule } from '@angular/core';
import { AddonAxificationsProvider } from './providers/axifications';
import { AddonAxificationsMainMenuHandler } from './providers/mainmenu-handler';
import { AddonAxificationsSettingsHandler } from './providers/settings-handler';
import { AddonAxificationsCronHandler } from './providers/cron-handler';
import { CoreAppProvider } from '@providers/app';
import { CoreContentLinksHelperProvider } from '@core/contentlinks/providers/helper';
import { CoreMainMenuDelegate } from '@core/mainmenu/providers/delegate';
import { CoreSettingsDelegate } from '@core/settings/providers/delegate';
import { CoreCronDelegate } from '@providers/cron';
import { CoreLocalNotificationsProvider } from '@providers/local-notifications';
import { CoreSitesProvider } from '@providers/sites';
import { CoreUtilsProvider } from '@providers/utils/utils';
import { AddonPushNotificationsDelegate } from '@addon/pushnotifications/providers/delegate';

// List of providers (without handlers).
export const ADDON_AXIFICATIONS_PROVIDERS: any[] = [
    AddonAxificationsProvider
];

@NgModule({
    declarations: [
    ],
    imports: [
    ],
    providers: [
        AddonAxificationsProvider,
        AddonAxificationsMainMenuHandler,
        AddonAxificationsSettingsHandler,
        AddonAxificationsCronHandler,
    ]
})
export class AddonAxificationsModule {
    constructor(mainMenuDelegate: CoreMainMenuDelegate, 
			mainMenuHandler: AddonAxificationsMainMenuHandler,
            settingsDelegate: CoreSettingsDelegate, 
			settingsHandler: AddonAxificationsSettingsHandler,
            cronDelegate: CoreCronDelegate, cronHandler: AddonAxificationsCronHandler,
            appProvider: CoreAppProvider, 
			utils: CoreUtilsProvider, 
			sitesProvider: CoreSitesProvider,
            axificationsProvider: AddonAxificationsProvider, 
			localNotifications: CoreLocalNotificationsProvider,
            linkHelper: CoreContentLinksHelperProvider, 
			pushNotificationsDelegate: AddonPushNotificationsDelegate) 
		{
			mainMenuDelegate.registerHandler(mainMenuHandler);
			settingsDelegate.registerHandler(settingsHandler);
			cronDelegate.register(cronHandler);

        const axificationClicked = (axification: any): void => {
            sitesProvider.isFeatureDisabled('CoreMainMenuDelegate_AddonAxifications', axification.site).then((disabled) => {
                if (disabled) {
                    // Axifications are disabled, stop.
                    return;
                }

                axificationsProvider.invalidateAxificationsList().finally(() => {
                    linkHelper.goInSite(undefined, 'AddonAxificationsListPage', undefined, axification.site);
                });
            });
        };

        if (appProvider.isDesktop()) {
            // Listen for clicks in simulated push axifications.
            //localNotifications.registerClick(AddonAxificationsProvider.PUSH_SIMULATION_COMPONENT, axificationClicked);
        }

        // Register push axification clicks.
		/*
        pushNotificationsDelegate.on('click').subscribe((axification) => {
            if (utils.isTrueOrOne(axification.notif)) {
                axificationClicked(axification);

                return true;
            }
        });
		*/
    }
}
