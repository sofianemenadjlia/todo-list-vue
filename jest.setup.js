import {
  VueRouterMock,
  createRouterMock,
  injectRouterMock,
} from "vue-router-mock";

import { config } from "@vue/test-utils";

const router = createRouterMock();

global.beforeEach(() => {
  injectRouterMock(router);
});

config.plugins.VueWrapper.install(VueRouterMock);
