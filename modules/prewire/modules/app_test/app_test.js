'use strict';
const rewire = require('rewire');
const logger = require('simple-node-logger').createLogManager().createLogger('[app_test]');
const appRewired = rewire('../app/app');

appRewired.__set__('db', {
    get: function(key){
        logger.info(`get(${key})`);
        return `mocked value for ${key}`; 
    }
})

function useGetTest(){
    logger.info('==>useGetTest');
    appRewired.useGet();
}

useGetTest();