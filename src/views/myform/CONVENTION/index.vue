<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('convention.note')" disabled />
            <a-step :title="$t('convention.aa')" disabled />
            <a-step :title="$t('convention.contact')" disabled />
            <a-step :title="$t('convention.ab')" disabled />
            <a-step :title="$t('convention.ac')" disabled />
            <a-step :title="$t('convention.am')" disabled />
            <a-step :title="$t('convention.cl')" disabled />
            <a-step :title="$t('convention.cp')" disabled />
        </a-steps>
        <a-spin :spinning="loading" class="form">
            <a-form-model
                class="form"
                ref="convention"
                :model="form"
                :rules="rules"
                @submit="handleSubmit"
                v-bind="formItemLayout"
            >
                <div v-show="stepCurrent === 0">
                    <p>{{ $t("convention.text1") }}</p>
                    <p>{{ $t("convention.text2") }}</p>
                    <p>{{ $t("convention.text3") }}</p>
                    <ul>
                        <li>
                            <p>{{ $t("convention.text4") }}</p>
                        </li>
                        <li>
                            <p>{{ $t("convention.tel") }}(853)8798 9292</p>
                        </li>
                        <li>
                            <p>{{ $t("convention.email") }}cesp@ipim.gov.mo</p>
                        </li>
                    </ul>
                    <p>{{ $t("convention.text5") }}</p>
                    <p>{{ $t("convention.text6") }}</p>
                    <p>{{ $t("convention.text7") }}</p>
                </div>
                <div v-show="stepCurrent === 1">
                    <a-form-model-item :label="$t('convention.officeNameZh')">
                        <a-input :value="currentInstitution.nameZh" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.officeNameEn')">
                        <a-input :value="currentInstitution.nameEn" disabled />
                        <p>{{ $t("convention.tips") }}</p>
                    </a-form-model-item>
                    <a-form-model-item required :label="$t('convention.officeBankName')">
                        <a-radio-group v-model="form.sameName" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("convention.eb")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("convention.ec")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item v-if="!form.sameName">
                        <a-input v-model="form.descriptionDifferentNames" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item required :label="$t('convention.comType')">
                        <a-radio-group v-model="form.institutionType" :disabled="isCheck">
                            <a-radio value="INDIVIDUAL">
                                {{
                                $t("convention.dw")
                                }}
                            </a-radio>
                            <a-radio value="INDIVIDUAL_BUSINESS_OWNER">
                                {{
                                $t("convention.dy")
                                }}
                            </a-radio>
                            <a-radio value="LIMITED_COMPANY">
                                {{
                                $t("convention.dz")
                                }}
                            </a-radio>
                            <a-radio value="GROUP">
                                {{
                                $t("convention.ea")
                                }}
                            </a-radio>
                            <a-radio value="OTHER">
                                {{ $t("util.other") }}({{
                                $t("convention.dm")
                                }})
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item v-if="form.institutionType === 'OTHER'">
                        <a-input v-model="form.enterpriseTypeDescription" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item required :label="$t('convention.appliType')">
                        <a-radio-group v-model="form.applicantType" :disabled="isCheck">
                            <a-radio value="ALL">
                                {{
                                $t("convention.ed")
                                }}
                            </a-radio>
                            <a-radio value="ORGANIZER">
                                {{
                                $t("convention.ee")
                                }}
                            </a-radio>
                            <a-radio value="LOCAL_BRANCH">
                                {{
                                $t("convention.ef")
                                }}
                            </a-radio>
                            <a-radio value="OTHER">
                                {{ $t("util.other") }}({{
                                $t("convention.dm")
                                }})
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item v-if="form.applicantType === 'OTHER'">
                        <a-input v-model="form.applicantTypeDescription" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item prop="country" :label="$t('util.country')">
                        <a-input v-model="form.country" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item prop="city" :label="$t('util.city')">
                        <a-input v-model="form.city" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item prop="address" :label="$t('convention.address')">
                        <a-input v-model="form.address" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item prop="phone" :label="$t('convention.tel')">
                        <a-input v-model="form.phone" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item prop="fax" :label="$t('convention.fax')">
                        <a-input v-model="form.fax" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item prop="email" :label="$t('convention.email')">
                        <a-input v-model="form.email" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item prop="web" :label="$t('convention.url')">
                        <a-input v-model="form.web" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.text14')">
                        <upload :value.sync="form.relatedFiles" :disabled="isCheck" />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 2">
                    <a-form-model-item prop="liaisonId" :label="$t('convention.conPerson1')">
                        <a-select
                            v-model="form.liaisonId"
                            showSearch
                            optionFilterProp="label"
                            :filterOption="true"
                            :disabled="isCheck"
                        >
                            <a-select-option
                                v-for="item in liaisonList"
                                :key="item.id"
                                :value="item.id"
                                :label="`${item.nameZh}${item.nameEnOrPt}`"
                            >
                                {{ item.nameZh }}
                                {{ item.nameEnOrPt }}
                            </a-select-option>
                        </a-select>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.job')">
                        <a-input :value="liaison_1.titleNameZh" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.tel')">
                        <a-input :value="liaison_1.tel" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.phone')">
                        <a-input :value="liaison_1.phone" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.email')">
                        <a-input :value="liaison_1.email" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.conPerson2')">
                        <a-select
                            v-model="form.liaisonSubId"
                            showSearch
                            optionFilterProp="label"
                            :filterOption="true"
                            :disabled="isCheck"
                        >
                            <a-select-option
                                v-for="item in liaisonList"
                                :key="item.id"
                                :value="item.id"
                                :label="`${item.nameZh}${item.nameEnOrPt}`"
                            >
                                {{ item.nameZh }}
                                {{ item.nameEnOrPt }}
                            </a-select-option>
                        </a-select>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.job')">
                        <a-input :value="liaison_2.titleNameZh" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.tel')">
                        <a-input :value="liaison_2.tel" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.phone')">
                        <a-input :value="liaison_2.phone" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.email')">
                        <a-input :value="liaison_2.email" disabled />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 3">
                    <a-form-model-item prop="activityId" :label="$t('convention.officeNameZh')">
                        <a-select v-model="form.activityId" :disabled="isCheck">
                            <a-select-option
                                v-for="item in list"
                                :key="item.id"
                                :value="item.id"
                                :label="item.nameZh"
                            >{{ item.nameZh }}</a-select-option>
                        </a-select>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.officeNameEn')">
                        <a-input :value="selectedActive.nameEn" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.activeUrl')">
                        <a-input :value="selectedActive.website" disabled />
                    </a-form-model-item>
                    <a-form-model-item required :label="$t('convention.ej')">
                        <a-radio-group v-model="form.conventionType" :disabled="isCheck">
                            <a-radio value="GENERAL_MEET">
                                {{
                                $t("convention.ek")
                                }}
                            </a-radio>
                            <a-radio value="INT_MEET">
                                {{
                                $t("convention.el")
                                }}
                            </a-radio>
                            <a-radio value="GENERAL_EXHIBIT">
                                {{
                                $t("convention.em")
                                }}
                            </a-radio>
                            <a-radio value="SPECIALTY_EXHIBIT">
                                {{
                                $t("convention.en")
                                }}
                            </a-radio>
                            <a-radio value="MEET_EXHIBIT">
                                {{
                                $t("convention.eo")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item>
                        <ul>
                            <li>{{ $t("convention.fa") }}</li>
                            <li>{{ $t("convention.fb") }}</li>
                            <li>{{ $t("convention.fc") }}</li>
                        </ul>
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 4">
                    <div
                        v-show="
                            form.conventionType === 'GENERAL_MEET' ||
                                form.conventionType === 'INT_MEET' ||
                                form.conventionType === 'MEET_EXHIBIT'
                        "
                    >
                        <a-form-model-item :label="$t('convention.activeTime')">
                            <div class="item">
                                <a-date-picker
                                    class="full"
                                    valueFormat="YYYY-MM-DD"
                                    v-model="form.meetingFrom"
                                    :disabled="isCheck"
                                    placeholder="開始日期"
                                />
                                <span>~</span>
                                <a-date-picker
                                    class="full"
                                    valueFormat="YYYY-MM-DD"
                                    v-model="form.meetingTo"
                                    :disabled="isCheck"
                                    placeholder="結束日期"
                                />
                            </div>
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.meetingAddress')">
                            <a-input v-model="form.meetingPlace" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.fy')">
                            <a-input v-model="form.meetingArea" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.meetingCycle')">
                            <a-radio-group v-model="form.meetingCycle" :disabled="isCheck">
                                <a-radio value="BIENNIAL">
                                    {{
                                    $t("convention.di")
                                    }}
                                </a-radio>
                                <a-radio value="ANNUAL">
                                    {{
                                    $t("convention.dj")
                                    }}
                                </a-radio>
                                <a-radio value="QUARTERLY">
                                    {{
                                    $t("convention.dl")
                                    }}
                                </a-radio>
                                <a-radio value="OTHER">
                                    {{ $t("util.other") }}({{
                                    $t("convention.dm")
                                    }})
                                </a-radio>
                            </a-radio-group>
                        </a-form-model-item>
                        <a-form-model-item v-if="form.meetingCycle === 'OTHER'">
                            <a-input
                                v-model="form.meetingCycleDescription"
                                :placeholder="$t('convention.dm')"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.meetingTime')">
                            <a-input v-model="form.hours" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.meetingAllDay')">
                            <div
                                v-for="(item, index) in form.meetingDates"
                                :key="index"
                                class="item"
                            >
                                <a-date-picker
                                    v-model="item.date"
                                    valueFormat="YYYY-MM-DD"
                                    style="width:70%;"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    style="width:20%;"
                                    v-model="item.hours"
                                    :placeholder="$t('convention.gf')"
                                    :disabled="isCheck"
                                />
                                <a-button
                                    v-if="index === 0"
                                    type="primary"
                                    icon="plus"
                                    shape="circle"
                                    @click="
                                        form.meetingDates.push({
                                            date: '',
                                            hours: ''
                                        })
                                    "
                                    :disabled="isCheck"
                                ></a-button>
                                <a-button
                                    v-else
                                    icon="minus"
                                    shape="circle"
                                    @click="form.meetingDates.splice(index, 1)"
                                    :disabled="isCheck"
                                ></a-button>
                            </div>
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.func')">
                            <div
                                v-for="(item, index) in form.activityDates"
                                :key="index"
                                class="item"
                            >
                                <a-date-picker
                                    v-model="item.date"
                                    valueFormat="YYYY-MM-DD"
                                    style="width:70%;"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    style="width:20%;"
                                    v-model="item.hours"
                                    :placeholder="$t('convention.gf')"
                                    :disabled="isCheck"
                                />
                                <a-button
                                    v-if="index === 0"
                                    type="primary"
                                    icon="plus"
                                    shape="circle"
                                    @click="
                                        form.activityDates.push({
                                            date: '',
                                            hours: ''
                                        })
                                    "
                                    :disabled="isCheck"
                                ></a-button>
                                <a-button
                                    v-else
                                    icon="minus"
                                    shape="circle"
                                    @click="form.activityDates.splice(index, 1)"
                                    :disabled="isCheck"
                                ></a-button>
                            </div>
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.meetingArea')">
                            <a-radio-group v-model="form.meetingHistory" :disabled="isCheck">
                                <a-radio value="TWO_EDITIONS">
                                    {{
                                    $t("convention.eg")
                                    }}
                                </a-radio>
                                <a-radio value="SECOND_EDITION">
                                    {{
                                    $t("convention.eh")
                                    }}
                                </a-radio>
                                <a-radio value="FIRST_EDITION">
                                    {{
                                    $t("convention.ei")
                                    }}
                                </a-radio>
                            </a-radio-group>
                            <div v-if="form.meetingHistory === 'TWO_EDITIONS'">
                                <div
                                    v-for="(item,
                                    index) in form.conventionHistory"
                                    :key="index"
                                    class="item"
                                >
                                    <a-date-picker
                                        v-model="item.date"
                                        valueFormat="YYYY-MM-DD"
                                        :disabled="isCheck"
                                    />
                                    <a-input
                                        v-model="item.venue"
                                        :placeholder="$t('convention.fd')"
                                        :disabled="isCheck"
                                    />
                                </div>
                                <upload :value.sync="form.historyFiles" :disabled="isCheck" />
                            </div>
                            <div v-if="form.meetingHistory === 'SECOND_EDITION'" class="item">
                                <a-date-picker
                                    v-model="form.secondDate"
                                    valueFormat="YYYY-MM-DD"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    v-model="form.secondVenue"
                                    :placeholder="$t('convention.fd')"
                                    :disabled="isCheck"
                                />
                            </div>
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.parInformation')">
                            <div class="item">
                                <a-input
                                    v-model="form.totalAttendees"
                                    :placeholder="$t('convention.fe')"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    v-model="form.attendeesFromMacao"
                                    :placeholder="$t('convention.ff')"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    v-model="form.overseasAttendees"
                                    :placeholder="$t('convention.fg')"
                                    :disabled="isCheck"
                                />
                            </div>
                            <upload :value.sync="form.attendeeFiles" :disabled="isCheck" />
                        </a-form-model-item>
                    </div>
                    <div
                        v-show="
                            form.conventionType === 'GENERAL_EXHIBIT' ||
                                form.conventionType === 'SPECIALTY_EXHIBIT' ||
                                form.conventionType === 'MEET_EXHIBIT'
                        "
                    >
                        <a-form-model-item :label="$t('convention.activeTime')">
                            <div class="item">
                                <a-date-picker
                                    class="full"
                                    valueFormat="YYYY-MM-DD"
                                    v-model="form.conventionFrom"
                                    :disabled="isCheck"
                                    placeholder="開始日期"
                                />
                                <span>~</span>
                                <a-date-picker
                                    class="full"
                                    valueFormat="YYYY-MM-DD"
                                    v-model="form.conventionTo"
                                    :disabled="isCheck"
                                    placeholder="結束日期"
                                />
                            </div>
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.ae')">
                            <div v-for="(item, index) in form.openTimes" :key="index" class="item">
                                <div class="item sp">
                                    <a-date-picker
                                        class="full"
                                        valueFormat="YYYY-MM-DD"
                                        v-model="item.openFrom"
                                        :disabled="isCheck"
                                        placeholder="開始日期"
                                    />
                                    <span>~</span>
                                    <a-date-picker
                                        class="full"
                                        valueFormat="YYYY-MM-DD"
                                        v-model="item.openTo"
                                        :disabled="isCheck"
                                        placeholder="結束日期"
                                    />
                                </div>
                                <a-input
                                    v-model="item.total"
                                    style="width:20%;"
                                    :placeholder="$t('convention.es')"
                                    :disabled="isCheck"
                                />
                                <a-button
                                    v-if="index === 0"
                                    type="primary"
                                    icon="plus"
                                    shape="circle"
                                    @click="
                                        form.openTimes.push({
                                            date: '',
                                            time: ''
                                        })
                                    "
                                    :disabled="isCheck"
                                ></a-button>
                                <a-button
                                    v-else
                                    icon="minus"
                                    shape="circle"
                                    @click="form.openTimes.splice(index, 1)"
                                    :disabled="isCheck"
                                ></a-button>
                            </div>
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.af')">
                            <a-input v-model="form.exhibitionReservedVenue" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.ag')">
                            <a-input v-model="form.confirmedExhibitionSpace" :disabled="isCheck" />
                            <p>{{ $t("convention.ew") }}</p>
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.meetingCycle')">
                            <a-radio-group v-model="form.activityCycle" :disabled="isCheck">
                                <a-radio value="BIENNIAL">
                                    {{
                                    $t("convention.di")
                                    }}
                                </a-radio>
                                <a-radio value="ANNUAL">
                                    {{
                                    $t("convention.dj")
                                    }}
                                </a-radio>
                                <a-radio value="QUARTERLY">
                                    {{
                                    $t("convention.dl")
                                    }}
                                </a-radio>
                                <a-radio value="OTHER">
                                    {{
                                    $t("convention.fh")
                                    }}
                                </a-radio>
                            </a-radio-group>
                        </a-form-model-item>
                        <a-form-model-item v-if="form.activityCycle === 'OTHER'">
                            <a-input v-model="form.activityCycleDescription" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.aj')">
                            <div class="item">
                                <a-input
                                    v-model="form.macaoExhibitorsBooth"
                                    :placeholder="$t('convention.ep')"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    v-model="form.macaoExhibitors"
                                    :placeholder="$t('convention.eq')"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    v-model="form.macaoProfessionalBuyer"
                                    :placeholder="$t('convention.er')"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    v-model="form.macaoWatchingThePublic"
                                    :placeholder="$t('convention.ex')"
                                    :disabled="isCheck"
                                />
                            </div>
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.ai')">
                            <div class="item">
                                <a-input
                                    v-model="form.overseasExhibitorsBooth"
                                    :placeholder="$t('convention.ep')"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    v-model="form.overseasExhibitors"
                                    :placeholder="$t('convention.eq')"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    v-model="form.overseasProfessionalBuyer"
                                    :placeholder="$t('convention.er')"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    v-model="form.overseasWatchingThePublic"
                                    :placeholder="$t('convention.ex')"
                                    :disabled="isCheck"
                                />
                            </div>
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.ak')">
                            <div class="item">
                                <a-input
                                    v-model="form.totalExhibitorsBooth"
                                    :placeholder="$t('convention.ep')"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    v-model="form.totalExhibitors"
                                    :placeholder="$t('convention.eq')"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    v-model="form.totalProfessionalBuyer"
                                    :placeholder="$t('convention.er')"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    v-model="form.totalWatchingThePublic"
                                    :placeholder="$t('convention.ex')"
                                    :disabled="isCheck"
                                />
                            </div>
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.al')">
                            <a-input
                                v-model="form.overSeasBuyers"
                                style="margin-bottom:10px;"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.ge')">
                            <upload :value.sync="form.overSeasBuyerFiles" :disabled="isCheck" />
                        </a-form-model-item>
                    </div>
                </div>
                <div v-show="stepCurrent === 5">
                    <p>{{ $t("convention.ax") }}</p>
                    <a-form-model-item :label="$t('convention.ap')">
                        <upload :value.sync="form.gifts" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.aq')">
                        <upload :value.sync="form.videos" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.as')">
                        <upload :value.sync="form.platforms" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.ay')">
                        <upload :value.sync="form.governments" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.aw')">
                        <upload :value.sync="form.ipims" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.av')">
                        <upload :value.sync="form.facilitations" :disabled="isCheck" />
                    </a-form-model-item>
                    <!-- 財務支持-會議 -->
                    <h3>{{ $t("convention.ga") }}</h3>
                    <p>{{ $t("convention.au") }}</p>
                    <a-form-model-item :label="$t('convention.az')">
                        <a-radio-group v-model="form.accommodationSupport" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <div v-if="form.accommodationSupport">
                        <a-form-model-item :label="$t('convention.fz')">
                            <div
                                v-for="(item, index) in form.meetingRooms"
                                :key="index"
                                class="item"
                            >
                                <a-date-picker
                                    v-model="item.date"
                                    valueFormat="YYYY-MM-DD"
                                    style="width:48%;"
                                    :placeholder="$t('convention.fj')"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    v-model="item.rooms"
                                    :placeholder="$t('convention.fk')"
                                    :disabled="isCheck"
                                />
                                <a-button
                                    v-if="index === 0"
                                    type="primary"
                                    icon="plus"
                                    shape="circle"
                                    @click="
                                        form.meetingRooms.push({
                                            date: '',
                                            rooms: ''
                                        })
                                    "
                                    :disabled="isCheck"
                                ></a-button>
                                <a-button
                                    v-else
                                    icon="minus"
                                    shape="circle"
                                    @click="form.meetingRooms.splice(index, 1)"
                                    :disabled="isCheck"
                                ></a-button>
                            </div>
                        </a-form-model-item>
                        <a-form-model-item
                            :label="
                                `${$t('convention.start5')}${$t(
                                    'convention.fl'
                                )}`
                            "
                        >
                            <a-input v-model="form.meetingStar5Rooms" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item
                            :label="
                                `${$t('convention.start5')}${$t(
                                    'convention.fm'
                                )}`
                            "
                        >
                            <a-input v-model="form.meetingStar5Name" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item
                            :label="
                                `${$t('convention.start4')}${$t(
                                    'convention.fl'
                                )}`
                            "
                        >
                            <a-input v-model="form.meetingStar4Rooms" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item
                            :label="
                                `${$t('convention.start4')}${$t(
                                    'convention.fm'
                                )}`
                            "
                        >
                            <a-input v-model="form.meetingStar4Name" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item
                            :label="
                                `${$t('convention.start3')}${$t(
                                    'convention.fl'
                                )}`
                            "
                        >
                            <a-input v-model="form.meetingStar3Rooms" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item
                            :label="
                                `${$t('convention.start3')}${$t(
                                    'convention.fm'
                                )}`
                            "
                        >
                            <a-input v-model="form.meetingStar3Name" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item
                            :label="
                                `${$t('convention.otherstar')}${$t(
                                    'convention.fl'
                                )}`
                            "
                        >
                            <a-input v-model="form.meetingOtherRooms" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item
                            :label="
                                `${$t('convention.otherstar')}${$t(
                                    'convention.fm'
                                )}`
                            "
                        >
                            <a-input v-model="form.meetingOtherName" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.fn')">
                            <a-input v-model="form.meetingTotalRooms" :disabled="isCheck" />
                        </a-form-model-item>
                    </div>
                    <p>{{ $t("convention.be") }}</p>
                    <a-form-model-item :label="$t('convention.bf')">
                        <a-radio-group v-model="form.packageSupport" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item v-if="form.packageSupport" :label="$t('convention.fo')">
                        <div
                            v-for="(item, index) in form.conventionDinings"
                            :key="index"
                            class="item"
                        >
                            <a-date-picker
                                v-model="item.date"
                                valueFormat="YYYY-MM-DD"
                                :placeholder="$t('convention.bg')"
                                class="full"
                                :disabled="isCheck"
                            />
                            <a-input
                                v-model="item.attendees"
                                :placeholder="$t('convention.bh')"
                                :disabled="isCheck"
                            />
                            <a-input
                                v-model="item.venue"
                                :placeholder="$t('convention.bi')"
                                :disabled="isCheck"
                            />
                            <a-button
                                v-if="index === 0"
                                type="primary"
                                icon="plus"
                                shape="circle"
                                @click="
                                    form.conventionDinings.push({
                                        date: '',
                                        attendees: '',
                                        venue: ''
                                    })
                                "
                                :disabled="isCheck"
                            ></a-button>
                            <a-button
                                v-else
                                icon="minus"
                                shape="circle"
                                @click="form.conventionDinings.splice(index, 1)"
                                :disabled="isCheck"
                            ></a-button>
                        </div>
                    </a-form-model-item>
                    <p>{{ $t("convention.bj") }}</p>
                    <a-form-model-item :label="$t('convention.bk')">
                        <a-radio-group v-model="form.supportForKeynote" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <div v-if="form.supportForKeynote">
                        <a-form-model-item :label="$t('convention.bl')">
                            <a-input v-model="form.totalSpeakers" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.bm')">
                            <a-input v-model="form.totalHeadsOfDelegation" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.bn')">
                            <a-input v-model="form.totalDelegations" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.bo')">
                            <a-input v-model="form.totalNoDelegations" :disabled="isCheck" />
                        </a-form-model-item>
                    </div>
                    <p>{{ $t("convention.bp") }}</p>
                    <a-form-model-item :label="$t('convention.bq')">
                        <a-radio-group v-model="form.promotionMarketingSupport" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <p>{{ $t("convention.fp") }}</p>
                    <a-form-model-item :label="$t('convention.fq')">
                        <a-radio-group v-model="form.interpretingTranslation" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <p>{{ $t("convention.bx") }}</p>
                    <a-form-model-item :label="$t('convention.br')">
                        <a-radio-group
                            v-model="form.localTransportationSupport"
                            :disabled="isCheck"
                        >
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <p>{{ $t("convention.fr") }}</p>
                    <a-form-model-item :label="$t('convention.bt')">
                        <a-radio-group v-model="form.pcosupport" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <p>
                        {{ $t("convention.bu")
                        }}
                        <span>{{ $t("convention.ci") }}</span>
                    </p>
                    <a-form-model-item :label="$t('convention.bw')">
                        <a-radio-group v-model="form.ceremonySupport" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <p>
                        {{ $t("convention.bv")
                        }}
                        <span>{{ $t("convention.ci") }}</span>
                    </p>
                    <a-form-model-item :label="$t('convention.bs')">
                        <a-radio-group v-model="form.venueRentalSupport" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <p>{{ $t("convention.fs") }}</p>
                    <a-form-model-item :label="$t('convention.bq')">
                        <a-radio-group v-model="form.greenChannelSupport" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <p>{{ $t("convention.ft") }}</p>
                    <a-form-model-item :label="$t('convention.bz')">
                        <a-radio-group v-model="form.performanceSupport" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <!-- 財務支持-展覽 -->
                    <h3>{{ $t("convention.fi") }}</h3>
                    <p>{{ $t("convention.bv") }}</p>
                    <a-form-model-item :label="$t('convention.bs')">
                        <a-radio-group v-model="form.exVenueRentalSupport" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <div v-if="form.exVenueRentalSupport">
                        <a-form-model-item :label="$t('convention.gb')">
                            <div class="item">
                                <a-date-picker
                                    class="full"
                                    valueFormat="YYYY-MM-DD"
                                    v-model="form.buildVenueFrom"
                                    placeholder="搭建開始日期"
                                    :disabled="isCheck"
                                />
                                <span>~</span>
                                <a-date-picker
                                    class="full"
                                    valueFormat="YYYY-MM-DD"
                                    v-model="form.buildVenueTo"
                                    placeholder="搭建結束日期"
                                    :disabled="isCheck"
                                />
                            </div>
                            <div class="item">
                                <a-input
                                    v-model="form.buildGroupArea"
                                    :placeholder="$t('convention.ag')"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    v-model="form.buildPrice"
                                    :placeholder="$t('convention.cf')"
                                    :disabled="isCheck"
                                />
                            </div>
                            <a-input
                                v-model="form.buildTotalPrice"
                                :placeholder="$t('convention.cg')"
                                disabled
                            >
                                <span slot="suffix">MOP</span>
                            </a-input>
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.gc')">
                            <div class="item">
                                <a-date-picker
                                    class="full"
                                    valueFormat="YYYY-MM-DD"
                                    v-model="form.exhibitionVenueFrom"
                                    placeholder="展覽開始日期"
                                    :disabled="isCheck"
                                />
                                <span>~</span>
                                <a-date-picker
                                    class="full"
                                    valueFormat="YYYY-MM-DD"
                                    v-model="form.exhibitionVenueTo"
                                    placeholder="展覽結束束日期"
                                    :disabled="isCheck"
                                />
                            </div>
                            <div class="item">
                                <a-input
                                    v-model="form.exhibitionGroupArea"
                                    :placeholder="$t('convention.ag')"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    v-model="form.exhibitionPrice"
                                    :placeholder="$t('convention.cf')"
                                    :disabled="isCheck"
                                />
                            </div>
                            <a-input
                                v-model="form.exhibitionTotalPrice"
                                :placeholder="$t('convention.cg')"
                                disabled
                            >
                                <span slot="suffix">MOP</span>
                            </a-input>
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.gd')">
                            <div class="item">
                                <a-date-picker
                                    class="full"
                                    valueFormat="YYYY-MM-DD"
                                    v-model="form.apartVenueFrom"
                                    placeholder="拆展開始日期"
                                    :disabled="isCheck"
                                />
                                <span>~</span>
                                <a-date-picker
                                    class="full"
                                    valueFormat="YYYY-MM-DD"
                                    v-model="form.apartVenueTo"
                                    placeholder="拆展結束束日期"
                                    :disabled="isCheck"
                                />
                            </div>
                            <div class="item">
                                <a-input
                                    v-model="form.apartGroupArea"
                                    :placeholder="$t('convention.ag')"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    v-model="form.apartPrice"
                                    :placeholder="$t('convention.cf')"
                                    :disabled="isCheck"
                                />
                            </div>
                            <a-input
                                v-model="form.apartTotalPrice"
                                :placeholder="$t('convention.cg')"
                                disabled
                            >
                                <span slot="suffix">MOP</span>
                            </a-input>
                        </a-form-model-item>
                    </div>
                    <p>{{ $t("convention.au") }}</p>
                    <a-form-model-item :label="$t('convention.az')">
                        <a-radio-group v-model="form.exAccommodationSupport" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <div v-if="form.exAccommodationSupport">
                        <a-form-model-item :label="$t('convention.fz')">
                            <div
                                v-for="(item, index) in form.exMeetingRooms"
                                :key="index"
                                class="item"
                            >
                                <a-date-picker
                                    v-model="item.date"
                                    valueFormat="YYYY-MM-DD"
                                    style="width:48%;"
                                    :placeholder="$t('convention.fj')"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    v-model="item.rooms"
                                    :placeholder="$t('convention.fk')"
                                    :disabled="isCheck"
                                />
                                <a-button
                                    v-if="index === 0"
                                    type="primary"
                                    icon="plus"
                                    shape="circle"
                                    @click="
                                        form.exMeetingRooms.push({
                                            date: '',
                                            rooms: ''
                                        })
                                    "
                                    :disabled="isCheck"
                                ></a-button>
                                <a-button
                                    v-else
                                    icon="minus"
                                    shape="circle"
                                    @click="
                                        form.exMeetingRooms.splice(index, 1)
                                    "
                                    :disabled="isCheck"
                                ></a-button>
                            </div>
                        </a-form-model-item>
                        <a-form-model-item
                            :label="
                                `${$t('convention.start5')}${$t(
                                    'convention.fl'
                                )}`
                            "
                        >
                            <a-input v-model="form.exMeetingStar5Rooms" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item
                            :label="
                                `${$t('convention.start5')}${$t(
                                    'convention.fm'
                                )}`
                            "
                        >
                            <a-input v-model="form.exMeetingStar5Name" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item
                            :label="
                                `${$t('convention.start4')}${$t(
                                    'convention.fl'
                                )}`
                            "
                        >
                            <a-input v-model="form.exMeetingStar4Rooms" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item
                            :label="
                                `${$t('convention.start4')}${$t(
                                    'convention.fm'
                                )}`
                            "
                        >
                            <a-input v-model="form.exMeetingStar4Name" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item
                            :label="
                                `${$t('convention.start3')}${$t(
                                    'convention.fl'
                                )}`
                            "
                        >
                            <a-input v-model="form.exMeetingStar3Rooms" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item
                            :label="
                                `${$t('convention.start3')}${$t(
                                    'convention.fm'
                                )}`
                            "
                        >
                            <a-input v-model="form.exMeetingStar3Name" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item
                            :label="
                                `${$t('convention.otherstar')}${$t(
                                    'convention.fl'
                                )}`
                            "
                        >
                            <a-input v-model="form.exMeetingOtherRooms" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item
                            :label="
                                `${$t('convention.otherstar')}${$t(
                                    'convention.fm'
                                )}`
                            "
                        >
                            <a-input v-model="form.exMeetingOtherName" :disabled="isCheck" />
                        </a-form-model-item>
                        <a-form-model-item :label="$t('convention.fn')">
                            <a-input v-model="form.exMeetingTotalRooms" :disabled="isCheck" />
                        </a-form-model-item>
                    </div>
                    <p>{{ $t("convention.fv") }}</p>
                    <a-form-model-item :label="$t('convention.df')">
                        <a-radio-group v-model="form.exhardwareSupport" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <p>{{ $t("convention.bu") }}</p>
                    <a-form-model-item :label="$t('convention.bw')">
                        <a-radio-group v-model="form.exCeremonySupport" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <p>{{ $t("convention.fw") }}</p>
                    <a-form-model-item :label="$t('convention.cj')">
                        <a-radio-group v-model="form.exQualifiedBuyersSupport" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <p>{{ $t("convention.fx") }}</p>
                    <a-form-model-item :label="$t('convention.dg')">
                        <a-radio-group v-model="form.exLogisticsSupport" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <p>{{ $t("convention.bp") }}</p>
                    <a-form-model-item :label="$t('convention.bq')">
                        <a-radio-group
                            v-model="form.exPromotionMarketingSupport"
                            :disabled="isCheck"
                        >
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <p>{{ $t("convention.bx") }}</p>
                    <a-form-model-item :label="$t('convention.br')">
                        <a-radio-group
                            v-model="form.exLocalTransportationSupport"
                            :disabled="isCheck"
                        >
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <p>{{ $t("convention.fs") }}</p>
                    <a-form-model-item :label="$t('convention.by')">
                        <a-radio-group v-model="form.exGreenChannelSupport" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <p>{{ $t("convention.ft") }}</p>
                    <a-form-model-item :label="$t('convention.bz')">
                        <a-radio-group v-model="form.exPerformanceSupport" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 6">
                    <a-form-model-item :label="$t('convention.cl')">
                        <a-radio-group v-model="form.otherGovernmentSupport" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("util.yes")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("util.no")
                                }}
                            </a-radio>
                        </a-radio-group>
                        <div v-if="form.otherGovernmentSupport">
                            <div
                                v-for="(item,
                                index) in form.conventionOtherGovs"
                                :key="item.id"
                                class="item"
                            >
                                <a-input
                                    v-model="item.name"
                                    :placeholder="$t('convention.cn')"
                                    :disabled="isCheck"
                                />
                                <a-input
                                    v-model="item.applicationContent"
                                    :placeholder="$t('convention.co')"
                                    :disabled="isCheck"
                                />
                                <a-button
                                    v-if="index === 0"
                                    type="primary"
                                    icon="plus"
                                    shape="circle"
                                    @click="
                                        form.conventionOtherGovs.push({
                                            name: '',
                                            applicationContent: ''
                                        })
                                    "
                                    :disabled="isCheck"
                                ></a-button>
                                <a-button
                                    v-else
                                    icon="minus"
                                    shape="circle"
                                    @click="
                                        form.conventionOtherGovs.splice(
                                            index,
                                            1
                                        )
                                    "
                                    :disabled="isCheck"
                                ></a-button>
                            </div>
                        </div>
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 7">
                    <p>{{ $t("convention.cq") }}</p>
                    <a-form-model-item :label="$t('convention.cr')">
                        <upload :value.sync="form.individualFiles" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.cx')">
                        <upload :value.sync="form.legalEntityFiles" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.ct')">
                        <upload :value.sync="form.nonProfitOrganisationFiles" :disabled="isCheck" />
                    </a-form-model-item>
                    <p>{{ $t("convention.dh") }}</p>
                    <a-form-model-item :label="$t('convention.cu')">
                        <upload :value.sync="form.contractFiles" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.cv')">
                        <upload :value.sync="form.receiptFiles" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.cw')">
                        <upload :value.sync="form.dmcFiles" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.cy')">
                        <upload :value.sync="form.natureAndHistoryFiles" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.cz')">
                        <upload :value.sync="form.detailedProgrammeFiles" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.da')">
                        <upload :value.sync="form.relatedDocumentsFiles" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.db')">
                        <upload :value.sync="form.keynoteSpeakersFiles" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.dc')">
                        <upload :value.sync="form.delegatesFiles" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.dd')">
                        <upload :value.sync="form.businessCardFiles" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.de')">
                        <upload :value.sync="form.otherDocumentsFiles" :disabled="isCheck" />
                    </a-form-model-item>
                </div>
                <a-form-model-item>
                    <a-button
                        v-show="stepCurrent > 0"
                        type="primary"
                        @click="stepCurrent--"
                        style="margin-right:12px"
                    >上一步</a-button>
                    <a-button
                        v-show="stepCurrent < 7"
                        type="primary"
                        :disabled="timeNext > 0"
                        @click="handleNext"
                    >
                        {{
                        timeNext > 0 ? `(${timeNext}S)` : "下一步"
                        }}
                    </a-button>
                    <a-button
                        v-show="stepCurrent === 7"
                        type="primary"
                        :class="isSubmit ? 'none' : ''"
                        @click="handleSubmit"
                    >{{ $t("attend.bo") }}</a-button>
                </a-form-model-item>
            </a-form-model>
        </a-spin>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Moment from "moment";

import Upload from "@/components/upload";
import validate from "./validate";
import EC from "@/apis/encourageConvention";

export default {
    props: {
        list: Array
    },
    components: {
        Upload
    },
    computed: {
        ...mapGetters([
            "liaisonList",
            "currentInstitution",
            "timeNext",
            "encourageDis"
        ]),
        liaison_1() {
            if (this.form.liaisonId) {
                const data = this.liaisonList.find(
                    item => item.id === this.form.liaisonId
                );
                return data ? data : this.form.liaison;
            } else {
                return {
                    titleNameZh: "",
                    tel: "",
                    phone: "",
                    email: ""
                };
            }
        },
        liaison_2() {
            if (this.form.liaisonSubId) {
                const data = this.liaisonList.find(
                    item => item.id === this.form.liaisonSubId
                );
                return data ? data : this.form.liaisonSub;
            } else {
                return {
                    titleNameZh: "",
                    tel: "",
                    phone: "",
                    email: ""
                };
            }
        },
        selectedActive() {
            if (this.form.activityId) {
                const data = this.list.find(
                    item => item.id === this.form.activityId
                );
                return data ? data : this.form.activity;
            } else {
                return {
                    nameEn: ""
                };
            }
        },
        isSubmit: function() {
            if (!this.form.status) {
                return false;
            } else {
                return this.form.status !== "rejected";
            }
        },
        isCheck: function() {
            return (
                this.form.status === "passed" ||
                this.form.status === "withdraw" ||
                this.form.status === "approving"
            );
        }
    },
    data() {
        return {
            ...validate,
            formId: undefined,
            form: {
                applicantId: "",
                institutionId: "",
                sameName: true,
                descriptionDifferentNames: "",
                institutionType: "INDIVIDUAL",
                enterpriseTypeDescription: "",
                applicantType: "ALL",
                applicantTypeDescription: "",
                country: "",
                city: "",
                address: "",
                phone: "",
                fax: "",
                email: "",
                web: "",
                relatedFiles: [],
                liaisonId: "",
                liaisonSubId: "",
                activityId: "",
                conventionType: "GENERAL_MEET",
                conventionFrom: "",
                conventionTo: "",
                meetingFrom: "",
                meetingTo: "",
                meetingPlace: "",
                meetingArea: "",
                meetingCycle: "BIENNIAL",
                activityCycle: "BIENNIAL",
                meetingCycleDescription: "",
                hours: "",
                meetingDates: [
                    {
                        date: null,
                        hours: ""
                    }
                ],
                activityDates: [
                    {
                        date: null,
                        hours: ""
                    }
                ],
                meetingHistory: "TWO_EDITIONS",
                conventionHistory: [
                    {
                        date: null,
                        venue: ""
                    },
                    {
                        date: null,
                        venue: ""
                    }
                ],
                historyFiles: [],
                attendeeFiles: [],
                totalAttendees: "",
                attendeesFromMacao: "",
                overseasAttendees: "",
                openTimes: [
                    {
                        openFrom: null,
                        openTo: null,
                        total: ""
                    }
                ],
                exhibitionReservedVenue: "",
                confirmedExhibitionSpace: "",
                overSeasBuyers: "",
                overSeasBuyerFiles: [],
                gifts: [],
                videos: [],
                platforms: [],
                governments: [],
                ipims: [],
                facilitations: [],
                accommodationSupport: false,
                packageSupport: false,
                conventionDinings: [
                    {
                        date: null,
                        attendees: "",
                        venue: ""
                    }
                ],
                supportForKeynote: false,
                totalSpeakers: "",
                totalHeadsOfDelegation: "",
                totalDelegations: "",
                totalNoDelegations: "",
                promotionMarketingSupport: false,
                interpretingTranslation: false,
                localTransportationSupport: false,
                ceremonySupport: false,
                venueRentalSupport: false,
                greenChannelSupport: false,
                performanceSupport: false,
                exVenueRentalSupport: false,
                exhardwareSupport: false,
                exCeremonySupport: false,
                exQualifiedBuyersSupport: false,
                exLogisticsSupport: false,
                exPromotionMarketingSupport: false,
                exLocalTransportationSupport: false,
                exGreenChannelSupport: false,
                exPerformanceSupport: false,
                otherGovernmentSupport: false,
                pcosupport: false,
                conventionOtherGovs: [
                    {
                        name: "",
                        applicationContent: ""
                    }
                ],
                individualFiles: [],
                legalEntityFiles: [],
                nonProfitOrganisationFiles: [],
                contractFiles: [],
                receiptFiles: [],
                dmcFiles: [],
                natureAndHistoryFiles: [],
                detailedProgrammeFiles: [],
                relatedDocumentsFiles: [],
                keynoteSpeakersFiles: [],
                delegatesFiles: [],
                businessCardFiles: [],
                otherDocumentsFiles: [],
                activityCycleDescription: "",
                macaoExhibitorsBooth: "",
                macaoExhibitors: "",
                macaoProfessionalBuyer: "",
                macaoWatchingThePublic: "",
                overseasExhibitorsBooth: "",
                overseasExhibitors: "",
                overseasProfessionalBuyer: "",
                overseasWatchingThePublic: "",
                totalExhibitorsBooth: "",
                totalExhibitors: "",
                totalProfessionalBuyer: "",
                totalWatchingThePublic: "",
                meetingRooms: [
                    {
                        date: "",
                        rooms: ""
                    }
                ],
                meetingStar5Rooms: "",
                meetingStar5Name: "",
                meetingStar4Rooms: "",
                meetingStar4Name: "",
                meetingStar3Rooms: "",
                meetingStar3Name: "",
                meetingOtherRooms: "",
                meetingOtherName: "",
                meetingTotalRooms: "",
                buildVenueFrom: "",
                buildVenueTo: "",
                exhibitionVenueFrom: "",
                exhibitionVenueTo: "",
                apartVenueFrom: "",
                apartVenueTo: "",
                buildGroupArea: "",
                exhibitionGroupArea: "",
                apartGroupArea: "",
                buildPrice: "",
                exhibitionPrice: "",
                apartPrice: "",
                buildTotalPrice: this.$t("convention.cg"),
                exhibitionTotalPrice: this.$t("convention.cg"),
                apartTotalPrice: this.$t("convention.cg"),
                exAccommodationSupport: false,
                exMeetingRooms: [
                    {
                        date: "",
                        rooms: ""
                    }
                ],
                secondDate: "",
                secondVenue: ""
            }
        };
    },
    methods: {
        async initData() {
            if (this.formId) {
                this.$store.dispatch("setChangeFalse");
                const { data } = await EC.one(this.formId);
                this.form = data;
            } else {
                this.form.applicantId = this.currentUser;
                this.form.institutionId = this.currentInstitution.id;
            }
        },
        //判斷機構是否已是認證機構
        isCertified() {
            this.$warning({
                title: "提示",
                content: "當前機構尚未認證，請點擊‘知道了’前往機構認證",
                okText: "知道了",
                onOk: () => {
                    this.$router.push("/personal/info");
                }
            });
        },
        //点击下一步
        handleNext() {
            this.stepCurrent++;
            //滚回到顶部
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        },
        //提交
        handleSubmit() {
            this.$refs.convention.validate(async valid => {
                if (valid) {
                    const { data } = await EC.create(this.form);
                    if (data) {
                        this.$message.success("申請成功");
                        this.$router.replace("/personal/funding");
                    }
                } else {
                    this.$message.error(
                        "表單存在必填項為空或者不合法字符，請檢查"
                    );
                }
            });
        }
    },
    mounted: function() {
        this.formId = this.$crypto.decryption(unescape(this.$route.query.d));
        if (!this.formId) this.$store.dispatch("setTimeNext");
        this.initData();
        this.$nextTick(() => {
            //判斷是否是未認證機構
            if (this.encourageDis) this.isCertified();
        });
    },
    destroyed: function() {
        this.$store.dispatch("setChangeTrue");
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");

p {
    line-height: 30px;
    font-size: 15px;
}

.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    & > * {
        margin-right: 10px;

        &:nth-last-child(1) {
            margin-right: 0;
        }
    }
}

.sp {
    width: 70%;
    margin-bottom: 0 !important;
}

.none {
    display: none;
}
</style>
