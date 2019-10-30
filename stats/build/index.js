"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Matchreader_1 = require("./Matchreader");
var Summary_1 = require("./Summary");
var matchReader = Matchreader_1.MatchReader.fromCsv('football.csv');
var summary1 = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
summary1.buildAndPrintReport(matchReader.matches);
