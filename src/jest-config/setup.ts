import 'jest-preset-angular';
import './__mocks__/globalMocks';

Object.defineProperty(global, 'Promise', { writable: false, value: global.Promise });