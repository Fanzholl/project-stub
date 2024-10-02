block('main')(
      tag()('main'),
      content()(function () {
          return [
              {
                  block: 'aside',
                  mix: { block: 'main', elem: 'aside' },
              },
              {
                  block: 'content',
                  mix: { block: 'main', elem: 'content' },
              },
          ];
      })
  );
  