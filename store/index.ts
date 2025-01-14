import { AgencyRepository } from '@/libraries/repositories/AgencyRepository'
import { ConsultationAboutFeverRepository } from '@/libraries/repositories/ConsultationAboutFeverRepository'
import { DailyPositiveDetailRepository } from '@/libraries/repositories/DailyPositiveDetailRepository'
import { DataRepository } from '@/libraries/repositories/DataRepository'
import { FeverConsultationCenterRepository } from '@/libraries/repositories/FeverConsultationCenterRepository'
// InfectionMedicalcareprovisionStatus ではなく InfectionMedicalCareProvisionStatus とする
import { InfectionMedicalcareprovisionStatusRepository as InfectionMedicalCareProvisionStatusRepository } from '@/libraries/repositories/InfectionMedicalCareProvisionStatusRepository'
import { MetroRepository } from '@/libraries/repositories/MetroRepository'
import { MonitoringCommentImageRepository } from '@/libraries/repositories/MonitoringCommentImageRepository'
import { NewsRepository } from '@/libraries/repositories/NewsRepository'
import { StayingPopulationRepository } from '@/libraries/repositories/StayingPopulationRepository'
import { TokyoRuleRepository } from '@/libraries/repositories/TokyoRuleRepository'
import { VaccinationAllRepository } from '@/libraries/repositories/VaccinationAllRepository'
import { VariantsRepository } from '@/libraries/repositories/VariantsRepository'

export const state = () => ({
  agency: new AgencyRepository().data,
  consultationAboutFever: new ConsultationAboutFeverRepository().data,
  dailyPositiveDetail: new DailyPositiveDetailRepository().data,
  data: new DataRepository().data,
  feverConsultationCenter: new FeverConsultationCenterRepository().data,
  infectionMedicalCareProvisionStatus:
    new InfectionMedicalCareProvisionStatusRepository().data,
  metro: new MetroRepository().data,
  monitoringCommentImage: new MonitoringCommentImageRepository().data,
  news: new NewsRepository().data,
  stayingPopulation: new StayingPopulationRepository().data,
  tokyoRule: new TokyoRuleRepository().data,
  vaccination: new VaccinationAllRepository().data,
  variants: new VariantsRepository().data,
})
