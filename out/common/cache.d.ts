import { ResponseParser } from './response';
import { RequestParser } from './request';
export declare var variableCache: {
    [key: string]: ResponseParser;
};
export declare var baseUrlCache: Set<string>;
export declare function getVariableNames(): string[];
export declare function findMatchingDataInVariableCache(varName: string, cache: any): any | undefined;
export declare function findMatchingVariable(name: string): any | undefined;
export declare function getBaseUrls(): string[];
export declare function updateCache(request: RequestParser, response: ResponseParser): void;
export declare function attemptToLoadVariable(text: string): any | undefined;
export declare function attemptToLoadVariableInObject(body: any): void;
