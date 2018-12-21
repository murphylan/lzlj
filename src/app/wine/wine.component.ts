import { Component, OnInit } from '@angular/core';
import { Wine } from '../Wine';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  wines: Wine[] = [
    {
      id: 1,
      name: '国窖1573 • 经典装',
      image: "../../assets/images/p1.png",
      price: 969,
      discription: ['源于建造于明朝万历年间的“国宝窖池”，采用蒸馏酒酿造工艺，酒质无色透明、窖香优雅、绵甜爽净、柔和协调、尾净香长，风格典型。'],
      others: '1箱 起',
      link: 'https://www.lzlj.com/',
      phone: '13808651986',
      specification: '规格：500ml',
      alcohol: '度数：52%vol'
    },
    {
      id: 3,
      name: '国窖1573 • 中国品味',
      image: "../../assets/images/p3.png",
      price: 2888,
      discription: ['酒体具有"柔、纯、雅"的特点，口感柔顺、绵甜，纯净无杂质，盛装于水晶玻璃，以牡丹衬其雍容华贵，蕴含中国文明精华。'],
      others: '1箱 起',
      link: 'https://www.lzlj.com/',
      phone: '13808651986',
      specification: '规格：500ml',
      alcohol: '度数：52%vol'
    },
    {
      id: 4,
      name: '泸州老窖特曲 • 藏品',
      image: "../../assets/images/p4.png",
      price: 2088,
      discription: ['寓意富贵喜庆，象征事业、生活红红火火，是高端商务宴请、生意馈赠、开业庆典、企业纪念活动，家庭装饰及自我珍藏的上佳选择。'],
      others: '1箱 起',
      link: 'https://www.lzlj.com/',
      phone: 'string',
      specification: '规格：2.5L',
      alcohol: '度数：52%vol'
    },
    {
      id: 5,
      name: '泸州老窖特曲 • 纪念版',
      image: "../../assets/images/p5.png",
      price: 488,
      discription: ['“以纪念彰显纪念，以酒对话人心”特曲品类中一款包含“人文情怀”的白酒产品。具有独特的品鉴价值和收藏价值。'],
      others: '1箱 起',
      link: 'string',
      phone: '13808651986',
      specification: '规格：500ml',
      alcohol: '度数：52%vol'
    },
    {
      id: 6,
      name: '泸州老窖特曲 • 晶彩',
      image: "../../assets/images/p6.png",
      price: 368,
      discription: ['中国白酒新风尚。既献礼钟爱特曲的忠实粉丝，更是一款现代、时尚，迎合80、90后年轻消费群体口感需求的白酒产品。'],
      others: '1箱 起',
      link: 'https://www.lzlj.com/',
      phone: '13808651986',
      specification: '规格：500ml',
      alcohol: '度数：52%vol'
    },
    {
      id: 7,
      name: '泸州老窖特曲 • 老字号',
      image: "../../assets/images/p7.png",
      price: 288,
      discription: ['以“醇香浓郁，清冽甘爽，饮后尤香，回味悠长”的独特风格著称于世，被誉为“浓香鼻祖，酒中泰斗”。'],
      others: '1箱 起',
      link: 'https://www.lzlj.com/',
      phone: '13808651986',
      specification: '规格：500ml',
      alcohol: '度数：52%vol'
    }
  ];
}
