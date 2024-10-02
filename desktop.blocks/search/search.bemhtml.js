block('search').content()(function () {
      return {
            tag: 'form',
            content: {
                  tag: 'input',
                  attrs: { type: 'text', placeholder: 'Строка поиска..' }
            }
      };
});
