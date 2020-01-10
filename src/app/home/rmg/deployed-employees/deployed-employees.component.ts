import { Component, OnInit } from '@angular/core';
import { RmgService } from '../../services/rmg.service';

@Component({
  selector: 'app-deployed-employees',
  templateUrl: './deployed-employees.component.html',
  styleUrls: ['./deployed-employees.component.scss']
})
export class DeployedEmployeesComponent implements OnInit {
  rmgdata: Object;
  rmgDataResponse: any;

  constructor(private rmgService:RmgService) { }

  ngOnInit() {
    this.getresources()
  }
  hidedtab=true;



  getresources() {
    var resourcedata = {
      "rmgInfo": {


      },
      "transactiontype": "getall"
    }

    this.rmgService.getAllResource(resourcedata).subscribe(res => {
      this.rmgdata = res;
      // this.rmgDataResponse = this.rmgdata.rmgInfo;
      console.log("resorcesss data",this.rmgdata)
    
     

      // for(let i in this.rmgDataResponse){
      //   var proName=this.dataTo.find(s=>s.projectId==this.rmgDataResponse[i].projectId)
      //   this.rmgDataResponse[i].projectName=proName.projectName
      //   if(this.rmgDataResponse[i].resourceType.toLowerCase()=='specific'){
 
      //        for(let j in this.rmgDataResponse[i].rmgspecific){

      //          if(this.rmgDataResponse[i].rmgspecific[j].specificStatus=='rejected'){
      //           this.rmgDataResponse[i].status='rejected'
      //           this.rmgProposal.push(this.rmgDataResponse[i])
      //           console.log(this.rmgDataResponse[i],"rejectedrecords")
      //           break;
      //          }

      //        }

      //   }
        
      // }

     


    })
  }
}
