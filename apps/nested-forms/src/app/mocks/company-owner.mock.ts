/* eslint-disable prefer-const */
import { CompanyOwnerModel } from '../models/company-owner.model';

export let COMPANY_OWNER_MOCK: CompanyOwnerModel[] = [
  {
    name: 'Jeff Bezos',
    companys: [
      {
        name: 'amazon',
        departments: [
          {
            name: 'deliver',
            employers: [
              {
                name: 'Bob Smith',
              },
            ],
          },
        ],
      },
    ],
    id: '0',
  },
];
