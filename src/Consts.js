module.exports = {
    KASUARI:[0x6b,0x61,0x73,0x75,0x61,0x72,0x69,0x5f],
    VERSION:0, // 부호없는 16비트 정수(0~65535)
    START_OF_DECLARATION:0x00,
    START_OF_ELEMENTS:0x01,
    END_OF_ELEMENTS:0x02,
    START_OF_ELEMENT:0x03,
    START_OF_ATTRIBUTES:0x05,
    START_OF_ATTRIBUTE:0x06,
    END_OF_ATTRIBUTES:0x07,
    types:{
        ELEMENT:0x00,
        TEXT:0x01,
        CDATA:0x02,
        PROCESSING_INSTRUCTION:0x03
    }
};