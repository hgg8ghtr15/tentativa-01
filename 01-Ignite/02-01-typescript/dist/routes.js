"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCurse = void 0;
var CreateCouseService_1 = __importDefault(require("./CreateCouseService"));
function createCurse(request, response) {
    // const {nome, duration, educador} = request.body
    // console.log(nome)
    // CreateCouseService.execute({
    //   duration: duration,
    //   nome: nome,
    //   educador: educador
    // })
    CreateCouseService_1.default.execute({
        nome: "JavaScript",
        duration: 40,
        educador: "Fabio lucas marconi"
    });
    return response.send("Objeto Criado com sucesso");
}
exports.createCurse = createCurse;
