"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = void 0;
const axios_1 = __importDefault(require("axios"));
class ApiClient {
    constructor(baseURL, headers = {}) {
        this.axiosInstance = axios_1.default.create({
            baseURL,
            headers,
        });
    }
    get(url, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request("get", url, null, config);
        });
    }
    post(url, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request("post", url, data, config);
        });
    }
    put(url, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request("put", url, data, config);
        });
    }
    delete(url, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request("delete", url, null, config);
        });
    }
    request(method, url, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const response = yield this.axiosInstance.request(Object.assign({ method,
                    url,
                    data }, config));
                return response.data;
            }
            catch (error) {
                throw new Error(((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Erro na requisição");
            }
        });
    }
}
exports.ApiClient = ApiClient;
