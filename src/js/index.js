"use strict";




var mortgageCalc = new Vue({
  el: '#mortgageCalc',
  data: {
    templateName: '',
    borrow: 0,
    term: 0,
    initialFee: '',
    annualRate: 12,
    selected: '',
    archive: [],
    archiveData: [],
  },
  computed: {
    mounthPayment: function() {
      return (((this.borrow-this.initialFee)*(this.term*this.annualRate)/100)/(this.term*12)).toFixed(2);
    },
    overPayment: function() {
      return (((this.borrow-this.initialFee)*(this.term*this.annualRate)/100)).toFixed(2);
    },
    creditAgree: function() {
      if (this.initialFee < 10*this.borrow / 100) {
        return 'Первоначальный взнос не может быть меньше 10% от суммы кредита.';
      }
    },
    creditAgreePlaceholder: function() {
      return 10*this.borrow / 100;
    },
  },
  methods: {
    save: function() {
      localStorage.setItem(this.templateName, this.borrow + ', ' + this.term + ' ,' + this.initialFee);
      alert('Данные сохранены');
    },
    getSave: function() {

        for (var i = 0; i < localStorage.length; i++) {
            this.archiveData[i] = localStorage.getItem(localStorage.key(i));
            this.archive[i] = localStorage.key(i);
        }
    }
  },
  beforeMount: function() {
      this.getSave();
    },
  updated: function() {

      this.getSave();
      if (this.selected != '') {

          let a = localStorage.getItem(this.selected).split(',')[0];
          let b = localStorage.getItem(this.selected).split(',')[1];
          let c = localStorage.getItem(this.selected).split(',')[2];

          this.borrow = a;
          this.term = b;
          this.initialFee = c;
        } else {


        }

  }

})
