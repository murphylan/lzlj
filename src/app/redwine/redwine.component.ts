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
      discription: [
        '种类: 红葡萄酒',
        '分类: 干红',
        '容量: 750ml',
        '国家: 澳洲',
        '品牌: 奔富Penfolds',
        '产区: 南澳-库纳瓦拉',
        '参考年份: 2015年',
        '瓶塞: 螺旋塞',
        '酒精度: 14.5%',
        '建议醒酒时间: 30分钟左右',
        '葡萄品种: 设拉子/西拉'
      ],
      others: '1箱 起',
      link: 'https://www.lzlj.com/',
      phone: '13808651986',
      specification: '',
      alcohol: ''
    },
    {
      id: 2,
      name: 'string',
      image: "../../assets/images/389.png",
      price: 6,
      discription: [
        '种类: 红葡萄酒',
        '分类: 干红',
        '容量: 750ml',
        '国家: 澳洲',
        '品牌: 奔富Penfolds',
        '产区: 南澳大利亚(South Australia)',
        '参考年份: 2015',
        '瓶塞: 螺旋塞/木塞',
        '酒精度: 14.5%',
        '建议醒酒时间: 1小时左右',
        '葡萄品种: 赤霞珠,设拉子'
      ],
      others: '1箱 起',
      link: 'https://www.lzlj.com/',
      phone: '13808651986',
      specification: '',
      alcohol: ''
    },
    {
      id: 3,
      name: 'string',
      image: "../../assets/images/407.png",
      price: 6,
      discription: [
        '种类: 红葡萄酒',
        '分类: 干红',
        '容量: 750ml',
        '国家: 澳洲',
        '品牌: 奔富Penfolds',
        '产区: 南澳大利亚(South Australia)',
        '参考年份: 2015',
        '瓶塞: 螺旋盖/木塞',
        '酒精度: 14.5%',
        '建议醒酒时间: 1小时左右',
        '葡萄品种: 100%赤霞珠'
      ],
      others: '1箱 起',
      link: 'https://www.lzlj.com/',
      phone: '13808651986',
      specification: '',
      alcohol: ''
    },
    {
      id: 4,
      name: 'string',
      image: "../../assets/images/707.png",
      price: 6,
      discription: [
        '种类: 红葡萄酒',
        '糖分: 干型',
        '容量: 750ml',
        '国家: 澳洲',
        '品牌: 奔富Penfolds',
        '产区: 南澳大利亚(South Australia)',
        '年份: 2015',
        '瓶塞: 木塞'
      ],
      others: '1箱 起',
      link: 'https://www.lzlj.com/',
      phone: 'string',
      specification: '',
      alcohol: ''
    }
  ];
}
