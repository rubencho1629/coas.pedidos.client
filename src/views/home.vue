<template>
  <div>
    <h2 class="content-block">Panel</h2>
    <div class="content-block">
      <DxForm :form-data="formData">
        
        <DxGroupItem :col-count="4" css-class="first-group">
          <DxSimpleItem template="avatar-template" />
          <DxGroupItem :col-span="3">
            <DxSimpleItem data-field="FirstName" />
            <DxSimpleItem data-field="LastName" />
            <DxSimpleItem
              :editor-options="birthDateOptions"
              data-field="BirthDate"
              editor-type="dxDateBox"
            />
          </DxGroupItem>
        </DxGroupItem>

        <DxGroupItem :col-count="2" css-class="second-group">
          <DxGroupItem>
            <DxSimpleItem data-field="Address" />
            <DxSimpleItem data-field="City" />
            <DxSimpleItem
              :editor-options="positionOptions"
              data-field="Position"
              editor-type="dxSelectBox"
            />
          </DxGroupItem>
          <DxGroupItem>
            <DxSimpleItem
              :editor-options="stateOptions"
              data-field="State"
              editor-type="dxSelectBox"
            />
            <DxSimpleItem data-field="ZipCode" />
            <DxSimpleItem :editor-options="phoneOptions" data-field="Mobile">
              <DxLabel text="Phone" />
            </DxSimpleItem>
          </DxGroupItem>
          <DxSimpleItem
            :col-span="2"
            :editor-options="notesOptions"
            data-field="Notes"
            editor-type="dxTextArea"
          />
        </DxGroupItem>

      </DxForm>
    </div>
    <div class="content-block">
      <div class="dx-card responsive-paddings">
       
      </div>
    </div>
  </div>
</template>
<script>
import {
  DxDataGrid,
  DxColumn,
  DxFilterRow,
  DxSimpleItem,
  DxGroupItem,
  DxLabel,
  DxForm,
} from "devextreme-vue/data-grid";

import { ApiDrugs } from "../utils/config-axios";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxFilterRow,
    DxSimpleItem,
    DxGroupItem,
    DxLabel,
    DxForm,
  },
  setup() {
    const panelDatasource = ref([]);
    //onMounted(() => {
    //  ApiDrugs.get("drugstore")
    //    .then((response) => {
    //      panelDatasource.value = response.data || [];
    //    })
    //    .catch((reason) => {
    //      console.log(reason);
    //    });
    //});

    return {
      panelDatasource,
    };
  },
  async created() {},
  data() {
    return {
      emailValue: "smith@corp.com",
      rules: { X: /[02-9]/ },
      formData: {
        ID: 1,
        FirstName: "John",
        LastName: "Heart",
        Position: "CEO",
        BirthDate: "1964/03/16",
        HireDate: "1995/01/15",
        Notes:
          "John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
        Address: "351 S Hill St.",
        City: "Los Angeles",
        State: "CA",
        ZipCode: "90013",
        Home: "555-684-1334",
        Mobile: "555-684-1335",
        Email: "jheart@dx-email.com",
        Skype: "jheart_DX_skype",
      },
      birthDateOptions: { width: "100%" },
      positionOptions: {
        items: [
          "HR Manager",
          "IT Manager",
          "Controller",
          "CEO",
          "Sales Manager",
          "Support Manager",
          "Shipping Manager",
        ],
        value: "",
      },
      stateOptions: {
        items: [
          "AL",
          "AK",
          "AZ",
          "AR",
          "CA",
          "CO",
          "CT",
          "DE",
          "FL",
          "GA",
          "HI",
          "ID",
          "IL",
          "IN",
          "IA",
          "KS",
          "KY",
          "LA",
          "ME",
          "MD",
          "MA",
          "MI",
          "MN",
          "MS",
          "MO",
          "MT",
          "NE",
          "NV",
          "NH",
          "NJ",
          "NM",
          "NY",
          "NC",
          "ND",
          "OH",
          "OK",
          "OR",
          "PA",
          "RI",
          "SC",
          "SD",
          "TN",
          "TX",
          "UT",
          "VT",
          "VA",
          "WA",
          "WV",
          "WI",
          "WY",
        ],
      },
      phoneOptions: { mask: "+1 (000) 000-0000" },
      notesOptions: { height: 140 },
    };
  },
  methods: {
    async fetchDataDrugStore() {},
    valueChanged(data) {
      this.emailValue = `${data.value
        .replace(/\s/g, "")
        .toLowerCase()}@corp.com`;
    },
  },
};
</script>
<style scoped lang="scss">
.logos-container {
  margin: 20px 0 40px 0;
  text-align: center;
  svg {
    display: inline-block;
  }
}

.devextreme-logo {
  width: 200px;
  height: 34px;
  margin-bottom: 17px;
}

.vue-logo {
  width: 180px;
  height: 62px;
}

.plus {
  margin: 20px 10px;
  width: 22px;
  height: 22px;
}

.screen-x-small .logos-container {
  svg {
    width: 100%;
    display: block;
    &.plus {
      margin: 0;
    }
  }
}
</style>
