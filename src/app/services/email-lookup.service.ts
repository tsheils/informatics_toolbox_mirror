import { Injectable } from '@angular/core';
const EMAILS: Map<string, any> = new Map <string, any>( [
    ['Noel Southall', {email: 'southalln@mail.nih.gov', staff: 'southalln'}],
    ['John Braisted', {email: 'john.braisted@nih.gov'}],
    ['Dac-Trung Nguyen', {email: 'nguyenda@mail.nih.gov'}],
    ['Vishal Siramshetty', {email: 'vishalbabu.siramshetty@nih.gov'}],
    ['Tongan Zhao', {email: 'tongan.zhao@nih.gov'}],
    ['Sarah Stemann', {email: 'sarah.stemann@nih.gov'}],
    ['Timothy Sheils', {email: 'timothy.sheils@nih.gov', staff: 'sheilstk'}],
    ['Mark Williams', {email: 'mark.williams5@nih.gov'}],
    ['Ivan Grishagin', {email: 'ivan.grishagin@nih.gov'}],
    ['Tyler Peryea', {email: 'tyler.peryea@nih.gov'}],
    ['Daniel Katzel', {email: 'daniel.katzel@nih.gov'}],
    ['Dammika Amugoda Kankanange', {email: 'dammika.amugoda@nih.gov', staff: 'amugodadn'}],
    ['Jorge Neyra', {email: 'jorge.neyra@nih.gov'}],
    ['Niko Anderson', {email: 'niko.anderson@nih.gov'}],
    ['Min Shen', {email: 'shenmin@mail.nih.gov', staff: 'shenmin'}],
    ['Xin Hu', {email: 'xin.hu@nih.gov', staff: 'hux6'}],
    ['Alexey Zakharov', {email: 'alexey.zakharov@nih.gov'}],
    ['Gergely Zahoranszky-Kohalmi', {email: 'gergely.zahoranszky-kohalmi@nih.gov', staff: 'zahoranszkykog2'}],
    ['Hongmao Sun', {email: 'hongmao.sun@nih.gov', staff: 'sunh7'}],
    ['Hui Guo', {email: 'hui.guo@nih.gov'}],
    ['Ruili Huang', {email: 'ruili.huang@nih.gov', staff: 'huangru'}],
    ['Lin Ye', {email: 'lin.ye2@nih.gov'}],
    ['Qian Zhu', {email: 'qian.zhu@nih.gov'}],
    ['Lu Chen', {email: 'lu.chen2@nih.gov', staff: 'chenl22'}],
    ['Claire Malley', {email: 'claire.malley@nih.gov', staff: 'malleyce'}],
    ['Gregory Tawa', {email: 'gregory.tawa@nih.gov'}],
    ['Bryan Queme', {email: 'bryan.queme@nih.gov'}],
    ['Yuhong Wang', {email: 'wangyuh@mail.nih.gov'}]
]);

@Injectable({
  providedIn: 'root'
})
export class EmailLookupService {

  constructor() { }

  getEmail(name: string): string {
      const user = EMAILS.get(name);
      return user ? user.email : null;
  }
}


