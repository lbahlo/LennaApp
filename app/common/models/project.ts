//import {IListItem} from "../../common/list/listitem";

export interface IProject {
    companyName:string;
    name: string;
    url: string;
    image: string;
    dates: string;
    description: string;
    routeName:string;
}

export class Project implements IProject {

   // System Copnnection Status
   // public static SYSTEM_CONNECTIVITY_UNKNOWN: number = 0;
   // public static SYSTEM_CONNECTIVITY_LAN: number = 1;
   // public static SYSTEM_CONNECTIVITY_WAN: number = 2;
    companyName:string;
    name: string;
    url: string;
    image: string;
    dates: string;
    description: string;
    routeName:string;

    public static create(data: IProject) {
        let newProject = new Project();
        Project.update(newProject, data);
    }

    public static update(target: IProject, source: IProject) {
        target.companyName = source.companyName;
        target.name = source.name;
        target.url = source.url;
        target.image = source.image;
        target.dates = source.dates;
        target.description = source.description;
        target.routeName =  source.routeName;
    }

    constructor() { };

    public update(source: IProject) {
        this.companyName = source.companyName
        this.name = source.name;
        this.url = source.url;
        this.image = source.image;
        this.dates = source.dates;
        this.description = source.description;
        this.routeName = source.routeName;

    }

    public clear() {
        this.name = "";
        this.url = "";
        this.image = "";
        this.dates = "";
        this.description = "";
    }
   
}



