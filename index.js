const express = require("express");
const {
  RtcTokenBuilder,
  RtmTokenBuilder,
  RtcRole,
  RtmRole,
} = require("agora-access-token");

const app = express();
app.use(express.json());

app.post("/rtctoken", (req, res) => {
  console.log(req.body.isPublisher, RtcRole.PUBLISHER, RtcRole.SUBSCRIBER);
  const appID = " 6e46211aa1ed44f2b37760747b9b107e";
  const appCertificate = "6e46211aa1ed44f2b37760747b9b107e";
  const expirationTimeInSeconds = 3600;
  const uid = Math.floor(Math.random() * 100000);
  const role =
    req.body.isPublisher === "1" ? RtcRole.PUBLISHER : RtcRole.SUBSCRIBER;
  const channel = req.body.channel;
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const expirationTimestamp = currentTimestamp + expirationTimeInSeconds;
  console.log(role);
  const token = RtcTokenBuilder.buildTokenWithUid(
    appID,
    appCertificate,
    channel,
    uid,
    role,
    expirationTimestamp
  );
  res.send({ uid, token });
});

app.post("/rtmtoken", (req, res) => {
    console.log(RtmRole.Rtm_User);
  const appID = "6e46211aa1ed44f2b37760747b9b107e";
  const appCertificate = "6e46211aa1ed44f2b37760747b9b107e";
  const user = req.body.user;
  const role = RtmRole.Rtm_User;
  const expirationTimeInSeconds = 3600;
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const expirationTimestamp = currentTimestamp + expirationTimeInSeconds;

  const token = RtmTokenBuilder.buildToken(
    appID,
    appCertificate,
  //  userAccount,
    role,
    expirationTimestamp
  );
  res.send({ token });
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Agora Auth Token Server listening at Port ${port}`)
);
