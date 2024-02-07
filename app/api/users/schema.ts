// 유효성 검사에 대한 대상 지정

import {z} from "zod";

const schema = z.object( {
    name: z.string().min(3),
    email: z.string().email(),
    // age: z.number(),
});

export default schema;