export const convertJSON = (form: JQuery<HTMLInputElement>) => {
  const array = $(form).serializeArray();
  const json: { [key: string]: string } = {};
  $.each(array, function () {
    json[this.name] = this.value || '';
  });
  return json;
};
