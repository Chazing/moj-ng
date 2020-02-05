import { Pipe, PipeTransform } from '@angular/core';
import { GreaterOrEqualThanValidator } from '../validations/customValidators/greater_or_equal_than.directive';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

transform(items: any[], searchingFieldName: string, searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
        if(it["sub_categories"])
          {this.transform(it["sub_categories"],searchingFieldName,searchText)
        }
        debugger
        return it[searchingFieldName].toLowerCase().includes(searchText);
    });
   }

  // transform(items: any[], searchingFieldName: string, searchText: string): any[] {
  //   if(!items) return [];
  //   if(!searchText) return items;
  //   searchText = searchText.toLowerCase();
  //   return items.filter( it => {
  //       if(it["sub_categories"])
  //         {this.transform(it["sub_categories"],searchingFieldName,searchText)
  //       }
  //       return it[searchingFieldName].toLowerCase().includes(searchText);
  //   });
  //  }

  // transform(items: any[], searchingFieldName: string, searchText: string): any[] {
  //   if(!items) return [];
  //   if(!searchText) return items;
  //   searchText = searchText.toLowerCase();
  //   return items.filter(it => {
  //     it.isDisplayedChild = false;
  //     it.isExpanded = false;
  //     if (it[searchingFieldName].toLowerCase().includes(searchText)) {
  //       it.isDisplayedChild = true;
  //       it["subCategories"].forEach(s => {
  //         s.isDisplay = true;
  //         s.isExpanded = false;
  //         s.isDisplayedChild = true;
  //         s["subCategories"].forEach(sc => sc.isDisplay = true);
  //       });
  //       return true;
  //     }
  //     else {
  //       let isChildDisplay = false;
  //       it["subCategories"].forEach(s => {
  //         s.isDisplayedChild = false;
  //         s.isExpanded = false;
  //         if (s[searchingFieldName].toLowerCase().includes(searchText)) {
  //           s["subCategories"].forEach(sc => sc.isDisplay = true);
  //           s.isDisplay = true;
  //           s.isDisplayedChild = true;
  //           isChildDisplay = true;
  //         } else {
  //           s.isDisplay = false;
  //           let isChildDisplayInner = false;
  //           s["subCategories"].forEach(sc => {
  //             if (sc[searchingFieldName].toLowerCase().includes(searchText)) {
  //               sc.isDisplay = true;
  //               isChildDisplayInner = isChildDisplay = true;
  //             } else {
  //               sc.isDisplay = false;
  //             }
  //           });
  //           s.isDisplay = isChildDisplayInner;
  //           s.isDisplayedChild = isChildDisplayInner;
  //         }
  //       });
  //       it.isDisplayedChild = isChildDisplay;
  //       return isChildDisplay;
  //     }
  //   });
  // }

}


