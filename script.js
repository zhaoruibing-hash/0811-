// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "研究へのご協力のお願い   ",
          "content": "本研究は、本研究は、若者のインターネット上の投稿やコンテンツに接する体験に関するものです。\u003Cbr\u003E                                                          \n\n◆ 所要時間：約20分 \u003Cbr\u003E                                        \n◆ 参加は途中で中止することもできます。\u003Cbr\u003E     \n◆ 回答はすべて匿名で処理され、個人が特定されることはありません。\u003Cbr\u003E  \n                                                              \n【注意事項】       \u003Cbr\u003E                                         \n本実験では、一部のコンテンツに自己卑下的な表現や               \n社会に対する冷笑的な視点が含まれる場合があります。             \n気分を害する可能性があることをご了承ください。                 \n                                                             \n "
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "本研究への参加についての同意",
          "options": [
            {
              "label": "私は研究についての説明を読み、内容に同意します。",
              "coding": "ic"
            }
          ],
          "help": "参加に同意いただけた方は下記のチェックボックスに、チェックを入れてください\u003Cbr\u003E\nチェックをしてから「次へ進む」ボタンを押してください。",
          "name": "sbj"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const digits = 7;
const participantID = this.random.range(10**digits, 10**(digits+1));
this.state.participantID = participantID;

}
      },
      "title": "Informed Consent"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "はじめに、あなたご自身について教えてください"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cform\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E1. あなたの年齢を数字でご記入ください。\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E年齢：\u003Cinput type=\"number\" name=\"age\" min=\"10\" max=\"99\" required\u003E 歳\u003C\u002Flabel\u003E\r\n\r\n\u003Chr\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E2. あなたの性別は？\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"sex\" value=\"1\" required\u003E 男性\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"sex\" value=\"2\"\u003E 女性\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"sex\" value=\"3\"\u003E その他\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"sex\" value=\"4\"\u003E 回答しない\u003C\u002Flabel\u003E\r\n\r\n\u003Chr\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E3. あなたの国籍をご記入ください。\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E国籍：\u003Cinput type=\"text\" name=\"nationality\" required\u003E\u003C\u002Flabel\u003E\r\n\r\n\u003Chr\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E4. あなたの最終学歴（在学中の場合は在籍中の課程）は？\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"education\" value=\"1\" required\u003E 中学校卒業\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"education\" value=\"2\"\u003E 高等学校卒業\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"education\" value=\"3\"\u003E 専門学校・高等専門学校卒業\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"education\" value=\"4\"\u003E 短期大学卒業\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"education\" value=\"5\"\u003E 大学（学部）卒業\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"education\" value=\"6\"\u003E 大学院（修士・博士）修了\u003C\u002Flabel\u003E\r\n\r\n\u003Chr\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E5. あなたのおおよその年収は？\u003C\u002Fstrong\u003E（学生の方は、アルバイト収入などご自身が自由に使える金額でお答えください）\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"income\" value=\"1\" required\u003E 無収入\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"income\" value=\"2\"\u003E 200万円未満\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"income\" value=\"3\"\u003E 200万〜400万円未満\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"income\" value=\"4\"\u003E 400万〜600万円未満\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"income\" value=\"5\"\u003E 600万〜800万円未満\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"income\" value=\"6\"\u003E 800万円以上\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"income\" value=\"7\"\u003E 回答しない\u003C\u002Flabel\u003E\r\n\r\n\u003Chr\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E6. あなたが最も長く育った場所は、次のどれに最も近いですか？\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"origin\" value=\"1\" required\u003E 大都市（東京23区・政令指定都市など）\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"origin\" value=\"2\"\u003E 地方の中規模都市（県庁所在地・中核市など）\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"origin\" value=\"3\"\u003E 小都市・町（上記以外の市町村）\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"origin\" value=\"4\"\u003E 農村・山間部など\u003C\u002Flabel\u003E\r\n\r\n\u003Chr\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E7. 主観的な階層帰属意識についてうかがいます。\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Cp\u003Eこの社会全体を、いちばん下（＝社会的・経済的に最も恵まれない層）を「1」、いちばん上（＝最も恵まれた層）を「10」とする10段階のはしごに見立ててください。学歴・収入・職業・生活水準などを総合的に考えたとき、あなたご自身は今、このはしごのどのあたりに位置すると感じますか。最も近い数字を一つお選びください。\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"subjective_class\" value=\"1\" required\u003E 1（いちばん下）\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"subjective_class\" value=\"2\"\u003E 2\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"subjective_class\" value=\"3\"\u003E 3\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"subjective_class\" value=\"4\"\u003E 4\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"subjective_class\" value=\"5\"\u003E 5\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"subjective_class\" value=\"6\"\u003E 6\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"subjective_class\" value=\"7\"\u003E 7\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"subjective_class\" value=\"8\"\u003E 8\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"subjective_class\" value=\"9\"\u003E 9\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"subjective_class\" value=\"10\"\u003E 10（いちばん上）\u003C\u002Flabel\u003E\r\n\r\n\u003C\u002Fform\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Demographic Information"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"max-width: 640px; margin: 0 auto; text-align: center; line-height: 1.9;\"\u003E\r\n\r\n\r\n\u003Cp\u003Eここからは、インターネット上に投稿されたいくつかの文章をご覧いただきます。\u003Cbr\u003E\r\nリラックスして、ふだんSNSなどに接するときと同じようにご覧ください。\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E準備ができましたら、「次へ進む」を押して進んでください。\u003C\u002Fp\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Break"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const groups = ['exp', 'ctrl'];
const g = groups[Math.floor(Math.random() * groups.length)];
this.options.datastore.set('group', g);
this.parameters.group = g;
}
      },
      "title": "Sequence",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": ""
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cstyle\u003E\r\n.feed { max-width: 600px; margin: 0 auto; padding: 0 12px; }\r\n.feed-intro { text-align: center; font-size: 16px; margin-bottom: 24px; line-height: 1.6; }\r\n.feed img { max-width: 100%; display: block; margin: 0 auto 16px auto; border-radius: 4px; }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Cdiv class=\"feed\"\u003E\r\n  \u003Cp class=\"feed-intro\"\u003Eこれから、インターネット上に投稿された文章をご覧ください。\u003Cbr\u003EふだんSNSなどに接するときと同じように、ご覧ください。\u003C\u002Fp\u003E\r\n\r\n  \u003Cimg src=\"${ this.files['post_1.png'] }\" alt=\"\"\u003E\r\n  \u003Cimg src=\"${ this.files['post_2.png'] }\" alt=\"\"\u003E\r\n  \u003Cimg src=\"${ this.files['post_3.png'] }\" alt=\"\"\u003E\r\n  \u003Cimg src=\"${ this.files['post_4.png'] }\" alt=\"\"\u003E\r\n  \u003Cimg src=\"${ this.files['post_5.png'] }\" alt=\"\"\u003E\r\n  \u003Cimg src=\"${ this.files['post_6.png'] }\" alt=\"\"\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ進む",
          "submitButtonPosition": "right",
          "files": {
            "post_4.png": "embedded\u002F3440cdba8c4a1e47a637a62ea9de6d543d121bc8c36faff0b0a90e3997e917cc.png",
            "post_5.png": "embedded\u002Fabb1794b1a59be314de68550b59624bb3c0af0f07af1776ac4c9626d06600b17.png",
            "post_1.png": "embedded\u002F8012f14420caf12474f333f0bb9e5ba4e54eae5f23213e33617cd32d2288d022.png",
            "post_2.png": "embedded\u002F07bc159f31464ccc3b02476a4a71acb7e821747d57cfc40bb5fc86abca61b922.png",
            "post_3.png": "embedded\u002F8fcd7e11f09d6cffb8358cf76c6f02c74882bc19353bab2fb488db3f13395db3.png",
            "post_6.png": "embedded\u002F4900262390bee00b34badc580605779fcdb8f453c1358be24ee45f04d5c20cb0.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Experimental Group",
          "skip": "${ this.parameters.group !== 'exp' }"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": ""
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cstyle\u003E\r\n.feed { max-width: 600px; margin: 0 auto; padding: 0 12px; }\r\n.feed-intro { text-align: center; font-size: 16px; margin-bottom: 24px; line-height: 1.6; }\r\n.feed img { max-width: 100%; display: block; margin: 0 auto 16px auto; border-radius: 4px; }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Cdiv class=\"feed\"\u003E\r\n  \u003Cp class=\"feed-intro\"\u003Eこれから、インターネット上に投稿された文章をご覧ください。\u003Cbr\u003EふだんSNSなどに接するときと同じように、ご覧ください。\u003C\u002Fp\u003E\r\n\r\n  \u003Cimg src=\"${ this.files['ctrl_post_1.png'] }\" alt=\"\"\u003E\r\n  \u003Cimg src=\"${ this.files['ctrl_post_2.png'] }\" alt=\"\"\u003E\r\n  \u003Cimg src=\"${ this.files['ctrl_post_3.png'] }\" alt=\"\"\u003E\r\n  \u003Cimg src=\"${ this.files['ctrl_post_4.png'] }\" alt=\"\"\u003E\r\n  \u003Cimg src=\"${ this.files['ctrl_post_5.png'] }\" alt=\"\"\u003E\r\n  \u003Cimg src=\"${ this.files['ctrl_post_6.png'] }\" alt=\"\"\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ進む",
          "submitButtonPosition": "right",
          "files": {
            "ctrl_post_3.png": "embedded\u002Fa69f5cf4f311d9de6132cfbeeaa81da98cd6139438665c0c16a456e6a7928f3e.png",
            "ctrl_post_1.png": "embedded\u002F223805fec52d7065ef818a322f948deb7ade9ea18c347fdba3ed8bf51ae1997b.png",
            "ctrl_post_2.png": "embedded\u002F6255b79519a80fb3ee771ad3218792215ce6a7ef96ac5ab1ec1aa695fcd4d183.png",
            "ctrl_post_4.png": "embedded\u002F56fd00bcae082ae1ef474d7e64b356e4d90c2e559776dc6d593a7178058a396a.png",
            "ctrl_post_5.png": "embedded\u002F3d3531d325b94c2760b29982ff3ad17756faa7ad62a99554d9eba33fa5ef1051.png",
            "ctrl_post_6.png": "embedded\u002F2a85d69c7f6033cf63519ecaa0aca609d49b063227b5cd35a9e9c1b456f2008a.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Control Group",
          "skip": "${ this.parameters.group !== 'ctrl' }"
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n\u002F* 单选按钮大幅放大 *\u002F\r\ninput[type=\"radio\"] {\r\n  width: 26px;\r\n  height: 26px;\r\n  cursor: pointer;\r\n  vertical-align: middle;\r\n}\r\n\u002F* 选项文字放大、间隔加大 *\u002F\r\nlabel {\r\n  font-size: 20px;\r\n  line-height: 2.4;\r\n  margin-right: 20px;\r\n  cursor: pointer;\r\n}\r\n\u002F* 题目文字放大 *\u002F\r\np, strong {\r\n  font-size: 20px;\r\n  line-height: 1.7;\r\n}\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Cform\u003E\r\n\u003Ch3\u003Eいまの気持ちについて（1）\u003C\u002Fh3\u003E\r\n\u003Cp\u003E投稿をご覧になった今、この瞬間の気持ちについて、質問に4段階でお答えください。（1＝決してない　2＝ほとんどない　3＝時々ある　4＝常にある）\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E1）自分は周りの人たちの中になじんでいると感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_1\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_1\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_1\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_1\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E2）自分には人との付き合いがないと感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_2\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_2\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_2\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_2\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E3）自分には頼れる人が誰もいないと感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_3\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_3\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_3\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_3\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E4）自分はひとりぼっちだと感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_4\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_4\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_4\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_4\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E5）自分は友人や仲間のグループの一員だと感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_5\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_5\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_5\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_5\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E6）自分は周りの人たちと共通点が多いと感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_6\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_6\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_6\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_6\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E7）自分は誰とも親しくしていないと感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_7\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_7\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_7\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_7\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E8）自分の関心や考えは周りの人たちにはわからないと感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_8\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_8\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_8\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_8\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E9）自分を社交的で親しみやすいと感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_9\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_9\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_9\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_9\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E10）自分には親しい人たちがいると感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_10\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_10\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_10\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_10\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E11）自分は取り残されていると感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_11\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_11\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_11\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_11\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E12）他人との関わりは意味がないと感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_12\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_12\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_12\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_12\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E13）自分のことを本当によく知っている人は誰もいないと感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_13\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_13\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_13\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_13\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E14）自分は他の人たちから孤立していると感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_14\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_14\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_14\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_14\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E15）希望すれば自分と気の合う仲間は見つかると感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_15\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_15\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_15\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_15\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E16）自分を本当に理解している人がいると感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_16\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_16\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_16\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_16\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E17）自分は内気であると感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_17\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_17\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_17\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_17\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E18）周りの人たちと一体感がもてないと感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_18\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_18\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_18\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_18\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E19）話し相手がいると感じる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_19\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_19\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_19\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_lone_19\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\r\n\u003C\u002Fform\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Post-test Questionnaire I"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n\u002F* 单选按钮大幅放大 *\u002F\r\ninput[type=\"radio\"] {\r\n  width: 26px;\r\n  height: 26px;\r\n  cursor: pointer;\r\n  vertical-align: middle;\r\n}\r\n\u002F* 选项文字放大、间隔加大 *\u002F\r\nlabel {\r\n  font-size: 20px;\r\n  line-height: 2.4;\r\n  margin-right: 20px;\r\n  cursor: pointer;\r\n}\r\n\u002F* 题目文字放大 *\u002F\r\np, strong {\r\n  font-size: 20px;\r\n  line-height: 1.7;\r\n}\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Cform\u003E\r\n\u003Ch3\u003Eいまの気持ちについて（2）\u003C\u002Fh3\u003E\r\n\u003Cp\u003E次の各文について、あなたにどの程度あてはまるかを、4段階でお答えください。（1＝まったくあてはまらない　2＝あまりあてはまらない　3＝ややあてはまる　4＝非常にあてはまる）\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E1）私は希望で胸をわくわくさせながら未来を待ち望んでいる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_1\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_1\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_1\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_1\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E2）私は物事を自分の思い通りにはできないので、あきらめたほうがましだ\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_2\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_2\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_2\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_2\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E3）物事がうまくいかなくても、それがいつまでも続くわけではないと思えば先が楽になる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_3\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_3\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_3\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_3\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E4）10年後に私がどんな生活をしているか、予想できない\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_4\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_4\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_4\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_4\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E6）私がとても心配していることは、将来うまく解決すると思う\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_6\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_6\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_6\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_6\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E7）私の未来は暗いように思われる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_7\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_7\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_7\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_7\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E8）普通の人よりはましな人生が送れると思う\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_8\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_8\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_8\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_8\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E9）私はいまだにチャンスが得られないし、これから先もチャンスに恵まれるとはとても思えない\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_9\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_9\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_9\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_9\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E11）自分の将来を思うと、苦しみばかりで楽しいことはなさそうだ\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_11\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_11\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_11\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_11\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E12）私が本当に欲しいものは手に入れられないと思う\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_12\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_12\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_12\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_12\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E13）未来のことを考えると、今よりも幸せになっているだろうと思われる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_13\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_13\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_13\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_13\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E14）何事にせよ私の望む通りにはならないだろう\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_14\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_14\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_14\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_14\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E16）私が望むものは決して手に入れられないから、何かを望むことはばかげている\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_16\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_16\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_16\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_16\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E17）特に、私が心から満足するようなことはありそうにない\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_17\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_17\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_17\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_17\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E18）私にとって未来はあいまいで不確かなものである\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_18\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_18\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_18\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_18\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E20）望むものを得ようと思っても多分手に入れられないだろうから、それを得るために努力しても仕方がない\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_20\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_20\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_20\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_hope_20\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003C\u002Fform\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Post-test Questionnaire II"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n\u002F* 单选按钮大幅放大 *\u002F\r\ninput[type=\"radio\"] {\r\n  width: 26px;\r\n  height: 26px;\r\n  cursor: pointer;\r\n  vertical-align: middle;\r\n}\r\n\u002F* 选项文字放大、间隔加大 *\u002F\r\nlabel {\r\n  font-size: 20px;\r\n  line-height: 2.4;\r\n  margin-right: 20px;\r\n  cursor: pointer;\r\n}\r\n\u002F* 题目文字放大 *\u002F\r\np, strong {\r\n  font-size: 20px;\r\n  line-height: 1.7;\r\n}\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Cform\u003E\r\n\u003Ch3\u003Eいまの気持ちについて（3）\u003C\u002Fh3\u003E\r\n\u003Cp\u003E心の状態を表す文が並んでいます。それぞれについて、\u003Cstrong\u003Eたった今、この瞬間\u003C\u002Fstrong\u003Eどの程度感じているかを、4段階でお答えください。（1＝まったくあてはまらない　2＝いくらかあてはまる　3＝かなりあてはまる　4＝非常にあてはまる）\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E1）固くなっている（緊張している）\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_1\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_1\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_1\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_1\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E2）どうてんしている\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_2\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_2\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_2\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_2\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E3）心配である\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_3\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_3\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_3\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_3\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E4）平静である\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_4\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_4\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_4\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_4\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E5）リラックスしている\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_5\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_5\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_5\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_5\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E6）満足している\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_6\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_6\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_6\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_stai_6\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\r\n\u003C\u002Fform\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Post-test Questionnaire III"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n\u002F* 单选按钮大幅放大 *\u002F\r\ninput[type=\"radio\"] {\r\n  width: 26px;\r\n  height: 26px;\r\n  cursor: pointer;\r\n  vertical-align: middle;\r\n}\r\n\u002F* 选项文字放大、间隔加大 *\u002F\r\nlabel {\r\n  font-size: 20px;\r\n  line-height: 2.4;\r\n  margin-right: 20px;\r\n  cursor: pointer;\r\n}\r\n\u002F* 题目文字放大 *\u002F\r\np, strong {\r\n  font-size: 20px;\r\n  line-height: 1.7;\r\n}\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Cform\u003E\r\n\u003Ch3\u003Eいまのあなたについて\u003C\u002Fh3\u003E\r\n\u003Cp\u003E投稿をご覧になった今、次の各文について\u003Cstrong\u003Eこの瞬間の\u003C\u002Fstrong\u003Eあなたにどの程度あてはまるかを、7段階でお答えください。（1＝まったくあてはまらない　〜　7＝非常にあてはまる）\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E1）他者に受け入れられなくても気にしないようにしている\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_1\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_1\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_1\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_1\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_1\" value=\"5\"\u003E5\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_1\" value=\"6\"\u003E6\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_1\" value=\"7\"\u003E7\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E2）避けられたり拒まれたりしないよう努めている\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_2\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_2\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_2\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_2\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_2\" value=\"5\"\u003E5\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_2\" value=\"6\"\u003E6\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_2\" value=\"7\"\u003E7\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E3）他者が自分を気にかけるかどうか、めったに心配しない\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_3\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_3\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_3\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_3\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_3\" value=\"5\"\u003E5\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_3\" value=\"6\"\u003E6\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_3\" value=\"7\"\u003E7\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E4）困ったとき頼れる人がいると常に感じていたい\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_4\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_4\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_4\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_4\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_4\" value=\"5\"\u003E5\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_4\" value=\"6\"\u003E6\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_4\" value=\"7\"\u003E7\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E5）他者に受け入れてもらいたい\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_5\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_5\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_5\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_5\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_5\" value=\"5\"\u003E5\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_5\" value=\"6\"\u003E6\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_5\" value=\"7\"\u003E7\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E6）一人でいるのが好きではない\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_6\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_6\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_6\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_6\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_6\" value=\"5\"\u003E5\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_6\" value=\"6\"\u003E6\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_6\" value=\"7\"\u003E7\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E7）長く友人と離れていても気にならない\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_7\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_7\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_7\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_7\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_7\" value=\"5\"\u003E5\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_7\" value=\"6\"\u003E6\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_7\" value=\"7\"\u003E7\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E8）人とのつながりを強く求めている\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_8\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_8\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_8\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_8\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_8\" value=\"5\"\u003E5\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_8\" value=\"6\"\u003E6\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_8\" value=\"7\"\u003E7\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E9）他者の計画に自分が含まれていないととても気になる\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_9\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_9\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_9\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_9\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_9\" value=\"5\"\u003E5\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_9\" value=\"6\"\u003E6\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_9\" value=\"7\"\u003E7\u003C\u002Flabel\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003E10）受け入れられていないと感じるとすぐに傷つく\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_10\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_10\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_10\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_10\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_10\" value=\"5\"\u003E5\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_10\" value=\"6\"\u003E6\u003C\u002Flabel\u003E\r\n\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"post_nbs_10\" value=\"7\"\u003E7\u003C\u002Flabel\u003E\r\n\r\n\u003C\u002Fform\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Post-test Questionnaire IV"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"max-width: 640px; margin: 0 auto; line-height: 1.9;\"\u003E\r\n\r\n\u003Ch3 style=\"text-align: center;\"\u003E研究ご協力ありがとうございました\u003C\u002Fh3\u003E\r\n\r\n\u003Cp\u003Eあなたは無作為に2つのグループのいずれかに割り当てられ、異なる投稿をご覧いただきました。本研究は、「親ガチャ」に代表される、格差や生まれをめぐる冷笑的な投稿に接することが、人に与える心理的な影響を調べるものです\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E本実験でご覧いただいたコンテンツには、心に負担を感じさせる内容が含まれていました。つらい気持ちや不安を感じられた場合は、身近な信頼できる方や、専門の相談窓口にご相談ください。〔いのちの電話：0570-783-556\u002Fお住まいの地域の精神保健福祉センターなど）\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E完了コードは、${this.state.participantID}です。\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E改めて、ご協力に心より感謝申し上げます。\u003C\u002Fp\u003E\r\n\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
const participantID = Math.random().toString(36).substring(2, 12);
const filename = participantID + "_data.csv";
const data = study.options.datastore.exportCsv();

console.log("filename:", filename);
console.log("data length:", data ? data.length : "DATA IS EMPTY");

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "Il0l4S0ba7yx",
    filename: filename,
    data: data,
  }),
});
}
      },
      "title": "End",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()