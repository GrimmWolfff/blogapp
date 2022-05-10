/* eslint-disable import/no-anonymous-default-export */
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

export default async function (req, res) {
    const { Password } = req.body;

    if (Password === process.env.ADMIN_PWD) {
    const token = sign(
        {
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
            Password,
        },
        'scrtkey'
    );

    const serialised = serialize("OursiteJWT", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        path: "/",
    });
    res.setHeader("Set-Cookie", serialised);
    res.status(200).json({ message: "Success!" });
    } else {
        res.json({ message: "Invalid credentials!" });
    }
}