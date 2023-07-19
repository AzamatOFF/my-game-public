/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          text: 'Что футболист вбрасывает в поле из аута?',
          answer: 'мяч',
          category_id: 1,
          score: 200,
        },
        {
          text: 'Что показывает судья футболисту, делая предупреждение?',
          answer: 'желтую карточку',
          category_id: 1,
          score: 400,

        },

        {
          text: 'Какой футбольный клуб базируется в Ярославле?',
          answer: 'Шинник',
          category_id: 1,
          score: 600,

        },
        {
          text: 'Какой футбольный клуб называется в народе БОМЖИ?',
          answer: 'Зенит',
          category_id: 1,
          score: 800,

        },
        {
          text: 'Где проходил чемпионат Мира по футболу в 2022 году?',
          answer: 'Катар',
          category_id: 1,
          score: 1000,

        },
        {
          text: 'Как называется столица Армении?',
          answer: 'Ереван',
          category_id: 2,
          score: 200,

        },
        {
          text: 'Какой город является столицей Туркмении?',
          answer: 'Ашхабад',
          category_id: 2,
          score: 400,

        },
        {
          text: 'Какой город является столицей Японии?',
          answer: 'Токио',
          category_id: 2,
          score: 600,

        },
        {
          text: 'Какой город является столицей Великобритании?',
          answer: 'Лондон',
          category_id: 2,
          score: 800,

        },
        {
          text: 'Столицей какого государства является Джакарта?',
          answer: 'Индонезия',
          category_id: 2,
          score: 1000,

        },
        {
          text: 'Как называется штрафной бросок в хоккее? ',
          answer: 'буллит',
          category_id: 3,
          score: 200,

        },
        {
          text:
            'В какой стране были приняты первые правила для игры в теннис?',
          answer: 'Франция',
          category_id: 3,
          score: 400,

        },
        {
          text:
            'Одно из первых его названий — «ось Аполлона». Что это за снаряд?',
          answer: 'Штанга',
          category_id: 3,
          score: 600,

        },
        {
          text:
            'Какая спортивная организация имеет девиз «Сила в движении»?',
          answer: 'Динамо',
          category_id: 3,
          score: 800,

        },
        {
          text: 'Танцор на льду- это',
          answer: 'Фигурист',
          category_id: 3,
          score: 1000,

        },

        {
          text:
            'Роль Джокера в одноимённом фильме Тодда Филлипса блистательно воплотил актёр',
          answer: 'Хоакин Феникс',

          category_id: 4,
          score: 200,

        },
        {
          text:
            'Как называется корейский фильм о социальном неравенстве и столкновении представителей разных слоёв общества, высоко оценённый критиками и зрителями? ',
          answer: 'Паразит',
          category_id: 4,
          score: 400,

        },
        {
          text:
            'Это великий детектив и бельгиец по происхождению стал главным героем 33 романов. В телесереале его роль блистательно исполнил Дэвид Суше.',
          answer: 'Эркюль Пуаро',
          category_id: 4,
          score: 600,

        },
        {
          text: 'Трус, Балбес и Бывалый появляются в фильме ...',
          answer: 'Самогонщики',
          category_id: 4,
          score: 800,

        },
        {
          text:
            'Кем работала Надя Шевелёва в фильме «Ирония судьбы, или С лёгким паром!»?',
          answer: 'Учительница',
          category_id: 4,
          score: 1000,

        },

      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
