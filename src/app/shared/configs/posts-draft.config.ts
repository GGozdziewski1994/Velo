import { Post } from '@models/';

export const posts: Post[] = [
  {
    type: 'post',
    title: 'Propozycje ciekawych tras w Wielkopolsce',
    image:
      'https://media.istockphoto.com/id/1127615814/pl/zdj%C4%99cie/planowanie-trasy-rowerowej.jpg?s=2048x2048&w=is&k=20&c=7jwXsy0eJPZbuv_idl0BQV-BE889grETRMUPkniI7Nw=',
    date: '23 kwietnia 2024',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    type: 'trip',
    title: 'Trasa Jezior w Szwajcari',
    image:
      'https://media.istockphoto.com/id/1402134774/pl/zdj%C4%99cie/profesjonalny-kolarz-szosowy-na-przeja%C5%BCd%C5%BCce-treningowej.jpg?s=2048x2048&w=is&k=20&c=yqicvnw7kHJUM3wRvXyAgHjJCsSO9zNP3z9uv_HwQMA=',
    date: '21 kwietnia 2024',
    time: '5 dni',
    distance: '550',
    level: 'średni',
  },
  {
    type: 'review',
    title: 'Test długo i krótkodystansowy',
    image:
      'https://media.istockphoto.com/id/1402134796/pl/zdj%C4%99cie/sylwetka-rowerzysty-o-zachodzie-s%C5%82o%C5%84ca.jpg?s=2048x2048&w=is&k=20&c=6ZGAo5IymMQ2ddWpnAz2x2ue94H1vGp2SuhY6Eo4mtc=',
    date: '19 kwietnia 2024',
    product: 'Rower',
    mark: 'Focus',
    model: 'FX 2',
  },
  {
    type: 'post',
    title: 'Co nowego czeka w 2024 roku',
    image:
      'https://media.istockphoto.com/id/1127615814/pl/zdj%C4%99cie/planowanie-trasy-rowerowej.jpg?s=2048x2048&w=is&k=20&c=7jwXsy0eJPZbuv_idl0BQV-BE889grETRMUPkniI7Nw=',
    date: '22 kwietnia 2024',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
