import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    HeaderTitle:'Welcome',
    school:[
      {
        name:"school A",
        code:"schl-A",
        hos:"abc",
        createdAt:Date.now(),
        departments:[
          {name:"class 1",code:"dept-1"},
          {name:"class 2",code:"dept-2"},
          {name:"class 3",code:"dept-3"},
          {name:"class 4",code:"dept-4"},
          {name:"class 5",code:"dept-5"},
          {name:"class 6",code:"dept-6"},
          {name:"class 7",code:"dept-7"},
          {name:"class 8",code:"dept-8"},
          {name:"class 9",code:"dept-9"},
          {name:"class 10",code:"dept-10"},
        ],
        notices:[],
        classes:[
          {name:"a",dept:"class 1"},
          {name:"a",dept:"class 2"},
          {name:"a",dept:"class 3"},
          {name:"a",dept:"class 4"},
          {name:"a",dept:"class 5"},
          {name:"a",dept:"class 6"},
          {name:"b",dept:"class 1"},
          {name:"b",dept:"class 2"},
          {name:"b",dept:"class 3"},
          {name:"b",dept:"class 4"},
          {name:"b",dept:"class 5"},
          {name:"b",dept:"class 6"},
        ],
        subjects:[
          {class:"class 1",name:"english"},
          {class:"class 1",name:"maths"},
          {class:"class 1",name:"science"},
          {class:"class 1",name:"hindi"},
          {class:"class 2",name:"english"},
          {class:"class 2",name:"maths"},
          {class:"class 2",name:"science"},
          {class:"class 2",name:"hindi"},
          {class:"class 3",name:"english"},
          {class:"class 3",name:"maths"},
          {class:"class 3",name:"science"},
          {class:"class 3",name:"hindi"},
          {class:"class 5",name:"english"},
          {class:"class 5",name:"maths"},
          {class:"class 5",name:"science"},
          {class:"class 5",name:"hindi"},
        ]

      },
      {
        name:"school B",
        code:"schl-B",
        hos:"abc",
        createdAt:Date.now(),
        departments:[
          {name:"class 1",code:"dept-1"},
          {name:"class 2",code:"dept-2"},
          {name:"class 3",code:"dept-3"},
          {name:"class 4",code:"dept-4"},
          {name:"class 5",code:"dept-5"},
          {name:"class 6",code:"dept-6"},
          {name:"class 7",code:"dept-7"},
          {name:"class 8",code:"dept-8"},
          {name:"class 9",code:"dept-9"},
          {name:"class 10",code:"dept-10"},
        ],
        notices:[],
        classes:[
          {name:"a",dept:"class 1"},
          {name:"a",dept:"class 2"},
          {name:"a",dept:"class 3"},
          {name:"a",dept:"class 4"},
          {name:"a",dept:"class 5"},
          {name:"a",dept:"class 6"},
          {name:"b",dept:"class 1"},
          {name:"b",dept:"class 2"},
          {name:"b",dept:"class 3"},
          {name:"b",dept:"class 4"},
          {name:"b",dept:"class 5"},
          {name:"b",dept:"class 6"},
        ],
        subjects:[
          {class:"class 1",name:"english"},
          {class:"class 1",name:"maths"},
          {class:"class 1",name:"science"},
          {class:"class 1",name:"hindi"},
          {class:"class 2",name:"english"},
          {class:"class 2",name:"maths"},
          {class:"class 2",name:"science"},
          {class:"class 2",name:"hindi"},
          {class:"class 3",name:"english"},
          {class:"class 3",name:"maths"},
          {class:"class 3",name:"science"},
          {class:"class 3",name:"hindi"},
          {class:"class 5",name:"english"},
          {class:"class 5",name:"maths"},
          {class:"class 5",name:"science"},
          {class:"class 5",name:"hindi"},
        ]

      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getSchool(state)
    {
      return state.school;
    }
  }
})
