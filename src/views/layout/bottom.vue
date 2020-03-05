<template>
    <div>
        <div class="flex center  h-back ">
            <div class="width-1280 ">
                <div class="flex-justify-content-space-between">
                    <div class="font-24">
                        澳門會展網
                        <br />https://www.mice.gov.mo/tc/
                    </div>

                    <div>
                        <div class="flex-align-items-center p-20">
                            <a-icon type="compass" class="icon" />
                            <div class="font-16">{{ $t("index.address") }}：澳門殺殺殺</div>
                        </div>
                        <div class="flex-align-items-center p-20">
                            <a-icon type="mail" class="icon" />
                            <div class="font-16">{{ $t("index.email") }}：澳門殺殺殺</div>
                        </div>
                        <div class="flex-align-items-center p-20">
                            <a-icon type="phone" class="icon" />
                            <div class="font-16">{{ $t("index.tel") }}：澳門殺殺殺</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="b-back center flex-align-items-center">
            <div class="width-1280 font-center">© copyright 2016IPIM. All rights reserved. (聲明)</div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.h-back {
    background: #f3f3f3;
    height: 200px;
    align-items: center;
    .font-24 {
        font-size: 24px;
        font-weight: bold;
    }
    .icon {
        font-size: 29px;
        color: red;
    }
    .font-16 {
        font-size: 14px;
        padding: 0 0 0 10px;
    }
    .p-20 {
        padding: 5px 0;
    }
}
.b-back {
    background: #3e3e3e;
    height: 100px;
    color: #ffffff;
    .font-center {
        text-align: center;
    }
}
</style>
