export interface Contact {
    info: {
      id: string
    }
    name: {
      firstName: string
      middleName?: string
      lastName: string
      maidenName?: string
      title?: string
    }
    residency?: {
      residencyType?: string
      residencyCountry?: string
    }
    demographics?: {
      gender?: string
      birthDate?: string
      birthCountry?: string
      maritalStatus?: string
      smokingStatus?: string
      healthClass?: string
    }
    occupation?: {
      occupationClass?: string
      occupationName?: string
    }
    addresses?: {
      address1?: {
        country?: string
        province?: string
        city?: string
        street?: string
        suite?: string
        postalCode?: string
        type?: string
      }
      address2?: {
        country?: string
        province?: string
        city?: string
        street?: string
        suite?: string
        postalCode?: string
        type?: string
      }
    }
    contact?: {
      email1?: {
        value?: string
        type?: string
      }
      email2?: {
        value?: string
        type?: string
      }
      phone1?: {
        value?: string
        type?: string
      }
      phone2?: {
        value?: string
        type?: string
      }
    }
    details?: {
      username?: string
      status?: string
      type?: string
    }
    audit: {
      ownerId: string
      ownerType: string
      // TODO: Later implemtation
      // ownerName: string
      // createdBy: string
      // createdByName: string
      // lastUpdated: string
      // isDeleted: string
      // dateDeleted: string
    }
  }
  