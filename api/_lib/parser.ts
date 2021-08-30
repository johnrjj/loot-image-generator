import { IncomingMessage } from 'http';
import { parse as parseUrl } from 'url';
import { parse,extract,  } from 'query-string';
import { ParsedRequest, Theme } from './types';

export function parseRequest(req: IncomingMessage) {
    console.log('HTTP ' + req.url);
    const params = extract(req.url);
    console.log('params', params)
    const parsed = parse((params), {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
    const loot = parsed.loot.toString().split('|')
    console.log('loot', loot);
    const parsedRequest: ParsedRequest = {
        loot: Array.isArray(loot) ? loot : [loot],
    };
    return parsedRequest;
}