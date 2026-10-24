const idols = [

{name:"ANA",photo:"KPOP_PHOTOS/ANA.jpg"},
{name:"BAEKHYUN",photo:"KPOP_PHOTOS/BAEKHYUN.jpg"},
{name:"CHAEYOUNG",photo:"KPOP_PHOTOS/CHAEYOUNG.jpeg"},
{name:"CHANYEOL",photo:"KPOP_PHOTOS/CHANYEOL.jpeg"},
{name:"CHEN",photo:"KPOP_PHOTOS/CHEN.jpg"},
{name:"D.O",photo:"KPOP_PHOTOS/D.O.jpeg"},
{name:"DAHYUN",photo:"KPOP_PHOTOS/DAHYUN.jpeg"},
{name:"GAEUL",photo:"KPOP_PHOTOS/GAEUL.jpeg"},
{name:"GISELLE",photo:"KPOP_PHOTOS/Giselle.jpg"},
{name:"IAN",photo:"KPOP_PHOTOS/IAN.jpg"},
{name:"IU",photo:"KPOP_PHOTOS/IU.jpg"},
{name:"J-HOPE",photo:"KPOP_PHOTOS/j-hope.webp"},
{name:"JANG",photo:"KPOP_PHOTOS/JANG.jpeg"},
{name:"JENNIE",photo:"KPOP_PHOTOS/Jennie.jpg"},
{name:"JEONGYEON",photo:"KPOP_PHOTOS/JEONGYEON.jpeg"},
{name:"JIHYO",photo:"KPOP_PHOTOS/JIHYO.jpeg"},
{name:"JIMIN",photo:"KPOP_PHOTOS/Jimin.webp"},
{name:"JIN",photo:"KPOP_PHOTOS/Jin.webp"},
{name:"JISOO",photo:"KPOP_PHOTOS/Jisoo.jpg"},
{name:"JIWOO",photo:"KPOP_PHOTOS/JIWOOO.jpg"},
{name:"JUNGKOOK",photo:"KPOP_PHOTOS/JungKook.webp"},
{name:"JUUNN",photo:"KPOP_PHOTOS/JUUNN.jpg"},
{name:"KAI",photo:"KPOP_PHOTOS/KAI.jpeg"},
{name:"KARINA",photo:"KPOP_PHOTOS/Karina.jpg"},
{name:"KRIS",photo:"KPOP_PHOTOS/KRIS.jpg"},
{name:"LAY",photo:"KPOP_PHOTOS/LAY.jpeg"},
{name:"LEESEO",photo:"KPOP_PHOTOS/Leeseo.jpeg"},
{name:"LISA",photo:"KPOP_PHOTOS/Lisa.jpg"},
{name:"LIZ",photo:"KPOP_PHOTOS/LIZ.jpeg"},
{name:"LUHAN",photo:"KPOP_PHOTOS/LUHAN.jpg"},
{name:"MINA",photo:"KPOP_PHOTOS/MINA.jpeg"},
{name:"MOMO",photo:"KPOP_PHOTOS/MOMO.jpeg"},
{name:"NAYEON",photo:"KPOP_PHOTOS/NAYEON.jpeg"},
{name:"NINGNING",photo:"KPOP_PHOTOS/Ningning.jpg"},
{name:"REI",photo:"KPOP_PHOTOS/REI.jpeg"},
{name:"RM",photo:"KPOP_PHOTOS/RM.webp"},
{name:"ROSÉ",photo:"KPOP_PHOTOS/Rose.jpg"},
{name:"SANA",photo:"KPOP_PHOTOS/SANA.jpeg"},
{name:"SEHUN",photo:"KPOP_PHOTOS/SEHUN.jpeg"},
{name:"STELLA",photo:"KPOP_PHOTOS/Stella.jpg"},
{name:"SUGA",photo:"KPOP_PHOTOS/Suga.webp"},
{name:"SUHO",photo:"KPOP_PHOTOS/SUHO.jpeg"},
{name:"TAO",photo:"KPOP_PHOTOS/TAO.png"},
{name:"TZUYU",photo:"KPOP_PHOTOS/TZUYU.jpeg"},
{name:"V",photo:"KPOP_PHOTOS/V.webp"},
{name:"WINTER",photo:"KPOP_PHOTOS/Winter.jpg"},
{name:"XIUMIN",photo:"KPOP_PHOTOS/XIUMIN.jpg"},
{name:"YEON",photo:"KPOP_PHOTOS/YEON.jpg"},
{name:"YUHARAM",photo:"KPOP_PHOTOS/Yuharam.jpg"},
{name:"YUJIN",photo:"KPOP_PHOTOS/YUJIN.jpeg"}

];

const greenFlags=[

"Sangat perhatian terhadap pasangan dan selalu berusaha menjaga komunikasi yang sehat. Biasanya mampu membuat hubungan terasa nyaman dan penuh dukungan.",

"Memiliki sifat yang loyal terhadap pasangan dan menghargai komitmen. Cenderung akan berusaha memperbaiki masalah daripada menghindarinya.",

"Mampu memberikan perhatian terhadap detail kecil yang sering membuat pasangannya merasa dihargai dan diperhatikan.",

"Merupakan pribadi yang suportif serta bersedia membantu pasangan mencapai tujuan hidupnya tanpa merasa tersaingi.",

"Memiliki energi positif yang membuat orang-orang di sekitarnya merasa aman, nyaman dan dihargai."

];

const redFlags=[

"Kadang terlalu memikirkan hal-hal kecil sehingga mudah mengalami overthinking dalam hubungan.",

"Memiliki ekspektasi yang cukup tinggi terhadap pasangan sehingga mudah merasa kecewa ketika kenyataan tidak sesuai harapan.",

"Cenderung memendam masalah terlalu lama sebelum akhirnya membicarakannya kepada pasangan.",

"Ketika sedang tertekan biasanya membutuhkan waktu sendiri sehingga terkadang terlihat menjauh dari pasangan.",

"Memiliki kecenderungan perfeksionis sehingga dapat memberikan tekanan yang tidak disadari kepada pasangan."

];

const personalities=[

"Golden Retriever Personality. Ramah, ceria, mudah berteman dan memiliki kepedulian yang tinggi terhadap orang-orang terdekat.",

"Black Cat Personality. Terlihat tenang dan misterius di awal perkenalan tetapi sebenarnya sangat perhatian kepada orang yang dipercaya.",

"Alpha Personality. Percaya diri, mandiri dan memiliki kemampuan mengambil keputusan dengan cepat dalam berbagai situasi.",

"Soft Personality. Hangat, penuh empati dan lebih mengutamakan kenyamanan orang lain dibanding kepentingan pribadi.",

"Independent Personality. Menyukai kebebasan dan memiliki kemampuan mengelola hidup secara mandiri."
];

const descriptions=[

"Tipe pasangan yang cocok untuk hubungan jangka panjang. Memiliki kemampuan menjaga komunikasi yang sehat dan menghargai kepercayaan sebagai fondasi hubungan.",

"Pribadi yang hangat, perhatian serta tidak segan memberikan dukungan kepada pasangan ketika menghadapi kesulitan ataupun tantangan hidup.",

"Memiliki keseimbangan antara rasa peduli, ambisi dan tanggung jawab sehingga hubungan terasa stabil dan menyenangkan.",

"Orang yang menghargai kesetiaan serta proses bertumbuh bersama dalam hubungan. Cocok untuk pasangan yang menginginkan hubungan serius.",

"Tipe pasangan yang mampu menjadi teman, sahabat dan pendukung terbaik dalam kehidupan sehari-hari."
];