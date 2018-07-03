export interface Member extends Object {
  name: string;
  company: Company;
}

interface Company {
  bs: string[];
}

export const defaultMember: Member = {
  name: 'Default Name',
  company: {
    bs: ['MEMBER']
  }
};
