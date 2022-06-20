import moment from 'moment';
const helpers = {
  data() {
    return {};
  },
  methods: {
    dateConversion(
      dateTime,
      inputformat = 'YYYY-MM-DDTHH:mm',
      format = 'DD/MM/YYYY HH:mm:ss',
    ) {
      const dateMoment = moment(dateTime, inputformat);
      return dateMoment.format(format);
    },
  },
};

export { helpers };
