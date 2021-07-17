"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCourseService = /** @class */ (function () {
    function CreateCourseService() {
    }
    CreateCourseService.prototype.execute = function (_a) {
        var nome = _a.nome, duration = _a.duration, educador = _a.educador;
        console.log(nome, duration, educador);
    };
    return CreateCourseService;
}());
exports.default = new CreateCourseService();
