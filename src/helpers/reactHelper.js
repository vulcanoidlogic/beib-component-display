import url from 'url';

const protocol = 'http';
const host = 'localhost:9020';
const selectedKind = 'BEIB_COMPONENT_DISPLAY';

const base = {
    protocol, host, query: {}
};

export const textFieldUrl = url.format(
    Object.assign({}, base, { query: { selectedKind, selectedStory: 'TEXT_FIELD' } })
);

export const textFieldSrcUrl = url.format(
    Object.assign({}, base, { query: { selectedKind, selectedStory: 'TEXT_FIELD_SRC' } })
);
