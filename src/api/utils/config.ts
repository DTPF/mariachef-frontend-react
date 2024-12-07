import { isLocalhost } from "utils/isLocalhost";
export const apiVersion = "v1";
const clientPort = 4010;
export const basePath = isLocalhost ?
    `${window.location.protocol}//${window.location.hostname}:${clientPort}/api/${apiVersion}` :
    `${window.location.origin}/api/${apiVersion}`;