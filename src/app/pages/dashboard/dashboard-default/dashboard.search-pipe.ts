import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "DashboardSearchPipe"
})
export class DashboardSearchPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            console.log("inside the query =>" + query)
            return _.filter(array, row=>row.toLowerCase().indexOf(query) > -1);
        }
        return array;
    }
}