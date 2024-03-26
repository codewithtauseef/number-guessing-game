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
const inquirer_1 = __importDefault(require("inquirer"));
function startFunc() {
    return __awaiter(this, void 0, void 0, function* () {
        let systemNum = Math.floor(Math.random() * 10 + 1);
        const userNum = yield inquirer_1.default.prompt([
            {
                type: "input",
                name: "userGuess",
                message: "Enter your number between 1 - 10 : "
            }
        ]);
        const { userGuess } = userNum;
        console.log("Your Guess : ", userGuess, "\nsystem Guess: ", systemNum);
        if (userGuess == systemNum) {
            console.log("Hurray ! YOU WIN!");
        }
        else {
            console.log("Better luck next time");
        }
    });
}
function startAgain() {
    return __awaiter(this, void 0, void 0, function* () {
        do {
            yield startFunc();
            var again = yield inquirer_1.default.prompt({
                type: "input",
                name: "restart",
                message: "Do you want continue? (y/n) "
            });
        } while (again.restart === "y");
    });
}
startAgain();
