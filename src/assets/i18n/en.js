import mission from "./MISSION/zh";
import participate from "./PARTICIPATE/zh";
import attend from "./ATTEND/zh";
import formbb from "./bb/zh";
import enterprise from "./ENTERPRISE/zh";
import formbe from "./be/zh";
import formbf from "./bf/zh";
import convention from "./CONVENTION/zh";
import miecf from "./MIECF/zh";
import mif from "./MIF/zh";
import plpex from "./PLPEX/zh";
import iiicf from "./IIICF/zh";
import mfe from "./MFE/zh";
import gmbpf from "./GMBPF/zh";

const zhData = {
    menu: {
        signUp: "參與本局主辦之展會",
        aa: "個別形式參展",
        ab: "展團形式參展",
        delegation: "參與本局組織之境外展會",
        ba: "參展",
        bb: "參加代表團",
        finEnc: "支持及鼓勵措施",
        ca: "非牟利社團赴境外展會設立展位",
        cb: "非牟利社團組織代表團參與境外展會",
        cc: "企業參與本地/境外展會",
        cd: "會議及展覽資助計劃",
        ce: "會展專業人才培訓支援計劃",
        cf: "會展及商務旅遊展支持計劃",
        plan: "會議及展覽資助計劃",
        lan: "語言",
        personal: "個人中心",
        perInfo: "個人信息",
        inIn: "機構信息",
        exEr: "參會/參團記錄",
        funding: "資助與財務鼓勵",
        acSe: "賬號設置",
        miecf: "澳門國際環保合作發展論壇及展覽",
        iiicf: "國際基礎設施投資與建設高峰論壇",
        mfe: "澳門國際品牌連鎖加盟展",
        gmbpf: "粵澳名優商品展",
        mif: "澳門國際貿易投資展覽會",
        plpex: "葡語國家產品及服務展",
        logout: "退出登錄",
    },
    index: {
        evCa: "展會日曆",
        keAc: "重點展會",
        allAc: "全部展會",
        address: "地址",
        email: "電郵",
        tel: "電話",
        fax: "傳真",
    },
    show: {
        available: "可報名的展會",
        processing: "進行中的展會",
        over: "已結束展會",
        local: "本地",
        overseas: "境外",
        localOrOver: "本局本地/境外之展會",
        ofWe: "官方網站",
        acAd: "展會地址",
        acTime: "展會日期",
        info: "展會信息",
        coPe: "展會聯絡人",
        organizer: "主辦/協辦單位",
        shop: "展會商戶",
        photo: "展會相冊",
        grEx: "展團形式參展",
        paDe: "參加代表團",
        aa: "填寫方式一：在線填寫申請表",
        ab: "填寫方式二：下載空白表格填寫",
        sir: "先生",
        lady: "女士",
        organizers: "主辦單位",
        helpers: "協辦單位",
        method: "參展方式",
        join: "參展",
        write: "填寫申請表",
        deadline: "截止報名",
    },
    util: {
        yes: "是",
        no: "否",
        other: "其他",
        man: "男",
        woman: "女",
        country: "國家",
        city: "城市",
        step1: "第一步：下載空白表格",
        step2: "第二步：打印空白表格",
        step3: "第三步：以手寫的方式填寫表格",
        step4: "第四步：表格蓋章",
        step5: "第五步：把表格正本遞交給貿促局工作人員",
        download: "下載附件",
        agree: "同意",
        disagree: "不同意",
        save: "保存",
        name: "姓名",
        password: "密碼",
        upPassword: "修改密碼",
        SMS: "短訊",
        sex: "性別",
        aphone: "本澳流动电话",
        bphone: "國內流動電話",
        address: "通訊地址",
        upData: "修改",
        nameZh: "姓名（中文）",
        nameEnAndPt: "姓名（英/葡文）",
        companyName: "企業名稱",
        liaisonName: "聯絡人名稱",
    },
    personal: {
        a: "選擇以電郵 / 手機短訊接收本局消息？",
        b: "原密碼",
        c: "新密碼",
        d: "確認新密碼",
        e: "職位",
        f: "在職狀態",
        g: "在職",
        h: "離職",
        i: "聯絡人管理",
        j: "新增聯絡人",
        k: "添加聯絡人",
        l: "修改聯絡人",
        m: "機構信息",
        n: "聯繫人管理",
        x: "子賬號管理",
        s: "機構信息管理",
        w: "場地登記編號（營業稅檔案）",
        u: "商業登記編號",
        y: "納稅人編號",
        z: "成立日期",
        aa: "業務",
        ab: "是否同意讀取澳門特別行政區政府財政局和商業及動產登記局資料庫內涉及本申請之相關稅務及商業登記資料？",
        ac: "企業股東分配情況",
        ad: "子賬號管理",
        ae: "新增子賬號",
        af: "綁定子賬號",
        ag: "請輸入員工個人信息的ID號",
        ah: "認證本機構",
        ai: "職位（英/葡文）",
        aj: "商業登記證明副本（三個月內有效）",
        ak: "營業稅-最初開業M/1或更改申請表M/1副本",
        al: "萱業稅-徵稅憑單M/8副本(最近一年)註1",
        am: "50%股東為澳門居民/全資澳門企業擁有之證明",
        an: "團體設立之澳門政府公報副本",
        ao: "身份證明局發出之登記證明書副本",
        ap: "法人代表之身份證副本",
        aq: "暫不認證本機構",
        ar: "機構性質",
        ax: "大學/研究機構",
        at: "政府機構",
        au: "企業",
        av: "商/協會",
        aw: "其他",
        ay: "納稅人名稱",
        az: "機構認證",
        logo: "機構LOGO",
        meNameZh: "機構名稱（中文）",
        meNameEn: "機構名稱（英文）",
        meNamePt: "機構名稱（葡文）",
        update: "修改申請",
        showForm: "查看申請表",
        question: "調查問卷",
        writeQuestion: "填寫問卷",
        showQuestion: "查看問卷",
        uploadPic: "上傳圖片",
        uploading: "圖片審批中",
        showPic: "查看圖片",
        undeal: "待審核",
        deal: "已審核",
        upload: "展會圖片",
        tips1: "您可上傳最多4張格式為jpg、jpeg、png的展會圖片，每張圖片大小不超過5M",
        submit: "提交",
        userId: "用戶ID",
        meType: "機構性質",
        approving: "待審批",
        passed: "獲批",
        rejected: "不獲批",
        withdraw: "已取消",
        others: "添加機構",
        certify: "認證本機構",
        upErr: "您所上傳的圖片不獲批，請重新提交",
        verified: "已認證",
        verifing: "認證中",
        unverified: "未認證",
        verifiedFail: "認證失敗",
    },
    report: {
        aa: "填寫方式一：在綫填寫展會報告",
    },
    login: {
        title: "管理員登錄",
        account: "帳號",
        password: "密碼",
        confirm: "確認密碼",
        login: "登錄",
        register: "註冊",
        have: "已有帳號？去",
        nohave: "沒有帳號？請先",
        forget: "忘記密碼",
        name: "姓名",
        phone: "電話",
        checkbox: "選擇以電郵/手機短訊接收本局消息",
        email: "電郵",
        message: "短訊",
        tips:
            "本人確定並同意澳門貿易投資促進局（“貿促局”）可將有關收集之商業資料（不涉及個人資料部分）編入其全部或任何“貿促局”資料庫內作為直接推廣、商業配對或本澳會展業界聯絡之用",
        register: "註冊",
        reset: "重置密碼",
        newPwd: "新密碼",
        code: "驗證碼",
        getCode: "獲取驗證碼",
        set: "確認重置",
        return: "返回",
    },
    miecf,
    mif,
    plpex,
    iiicf,
    mfe,
    gmbpf,
    mission,
    participate,
    attend,
    formbb,
    enterprise,
    formbe,
    formbf,
    convention,
};

export default zhData;
