import { wrapMapToPropsConstant, wrapMapToPropsFunc } from './wrapMapToProps';

export function whenMapQueriesToPropsIsFunction(mapQueriesToProps) {
    return typeof mapQueriesToProps === 'function' ? wrapMapToPropsFunc(mapQueriesToProps, 'mapQueriesToProps') : undefined;
}

export function whenMapQueriesToPropsIsMissing(mapQueriesToProps) {
    return !mapQueriesToProps ? wrapMapToPropsConstant(function () {
        return {};
    }) : undefined;
}

export default [whenMapQueriesToPropsIsFunction, whenMapQueriesToPropsIsMissing];