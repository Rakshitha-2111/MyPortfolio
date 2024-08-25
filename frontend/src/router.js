import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import EducationPage from './components/EducationPage.vue';
import TechnicalSkills from './components/TechnicalSkills.vue';
import ProjectsPage from './components/ProjectsPage.vue';
import ContactPage from './components/ContactPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/education', component: EducationPage },
  { path: '/technical-skills', component: TechnicalSkills },
  { path: '/projects', component: ProjectsPage },
  { path: '/contact', component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
