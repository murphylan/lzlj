import { Component, OnInit } from '@angular/core';
import { Wine } from '../Wine';

@Component({
  selector: 'app-redwine',
  templateUrl: './redwine.component.html',
  styleUrls: ['./redwine.component.css']
})
export class RedwineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  wines: Wine[] = [
    {
      id: 1,
      name: 'string',
      image: "../../assets/images/128.png",
      price: 6,
      discription: '750ml，澳洲奔富Penfolds，产区: 南澳-库纳瓦拉，2015年，螺旋塞，酒精度14.5%，葡萄品种:设拉子/西拉。建议醒酒时间: 1小时左右',
      others: '2箱 起',
      link: 'https://www.lzlj.com/',
      phone: '13808651986',
    },
    {
      id: 2,
      name: 'string',
      image: "../../assets/images/389.png",
      price: 6,
      discription: '750ml，澳洲奔富Penfolds，产区: 南澳大利亚(South Australia)，2015年，螺旋塞/木塞，酒精度14.5%，葡萄品种:赤霞珠,设拉子。',
      others: '1箱 起',
      link: 'https://www.lzlj.com/',
      phone: '13808651986',
    },
    {
      id: 3,
      name: 'string',
      image: "../../assets/images/407.png",
      price: 6,
      discription: '750ml，澳洲奔富Penfolds，产区: 南澳大利亚(South Australia)，2015年，螺旋塞/木塞，酒精度14.5%，葡萄品种:100%赤霞珠。',
      others: '1箱 起',
      link: 'https://www.lzlj.com/',
      phone: '13808651986',
    },
    {
      id: 4,
      name: 'string',
      image: "../../assets/images/707.png",
      price: 6,
      discription: '750ml，澳洲奔富Penfolds，产区: 南澳大利亚(South Australia)，2015年，木塞。',
      others: '2箱 起',
      link: 'https://www.lzlj.com/',
      phone: 'string',
    }
  ];
}
