const config = { required: true, message: "plese input" };
const config_select = { required: true, message: "plese select" };

export default {
    formInfo: {}, //表單詳細
    activityId: 1, //展會ID
    applicantId: 1, //申請人ID
    institutionId: 1, //機構ID
    stepCurrent: 0,
    rules: {
        nameZh: config,
        birthDate: config_select,
        liaisonId: config_select
    },
    formItemLayout: {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 }
    }
};
