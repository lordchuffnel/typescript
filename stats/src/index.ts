import { MatchReader } from './Matchreader';
import { Summary } from './Summary';


const matchReader = MatchReader.fromCsv('football.csv');
const summary1 = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary1.buildAndPrintReport(matchReader.matches);