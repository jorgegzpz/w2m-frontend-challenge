import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppRoutes } from './app/app.routing';
import { MainComponent } from './app/components/main/main.component';

bootstrapApplication(MainComponent, { providers: [provideRouter(AppRoutes), provideAnimations()] }).catch(error => console.error(error));
