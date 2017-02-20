import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { MyData } from '../providers/my-data';

platformBrowserDynamic().bootstrapModule(AppModule, [MyData]);
