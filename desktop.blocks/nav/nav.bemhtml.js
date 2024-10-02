block('nav')(
      tag()('nav')
);

block('nav').elem('top')(
      content()(function () {
            return [
                  {
                        block: 'logo',
                        mix: { block: 'nav', elem: 'logo' }
                  },
                  {
                        block: 'search',
                        mix: { block: 'nav', elem: 'search' }
                  },
                  {
                        block: 'phone',
                        mix: { block: 'nav', elem: 'phone' }
                  }
            ];
      })
);

block('nav').elem('bottom')(
      content()(function () {
            return {
                  block: 'menu',
                  mix: { block: 'nav', elem: 'menu' }
            };
      })
);
