import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "SearchPipe"
})
export class SearchPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            console.log("inside the query =>" + query)
            return _.filter(array, row=>row.startupName.toLowerCase().indexOf(query) > -1 || row.location.toLowerCase().indexOf(query) > -1);
        }
        return array;
    }
}