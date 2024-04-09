import type { Language } from '../types.js'

export const ru: Language = {
  dateFNSKey: 'ru',
  translations: {
    authentication: {
      account: 'Аккаунт',
      accountOfCurrentUser: 'Аккаунт текущего пользователя',
      alreadyActivated: 'Уже активирован',
      alreadyLoggedIn: 'Уже вошли в систему',
      apiKey: 'API ключ',
      backToLogin: 'Вернуться к входу',
      beginCreateFirstUser: 'Чтобы начать - создайте первого пользователя.',
      changePassword: 'Сменить пароль',
      checkYourEmailForPasswordReset:
        'На ваш email отправлена ссылка, с помощью которой можно будет сбросить пароль.',
      confirmGeneration: 'Подтвердить генерацию',
      confirmPassword: 'Подтверждение пароля',
      createFirstUser: 'Создание первого пользователя',
      emailNotValid: 'Указанный адрес электронной почты неверен',
      emailSent: 'Email отправлен',
      enableAPIKey: 'Активировать API ключ',
      failedToUnlock: 'Не удалось разблокировать',
      forceUnlock: 'Принудительная разблокировка',
      forgotPassword: 'Забыли пароль',
      forgotPasswordEmailInstructions:
        'Пожалуйста, введите ваш email. Вы получите письмо с инструкцией по восстановлению пароля.',
      forgotPasswordQuestion: 'Забыли пароль?',
      generate: 'Сгенерировать',
      generateNewAPIKey: 'Сгенерировать новый API ключ',
      generatingNewAPIKeyWillInvalidate:
        'Генерация нового API ключа приведёт к <1>недействительности</1> предыдущего ключа. Вы уверены, что хотите продолжить?',
      lockUntil: 'Заблокировать до',
      logBackIn: 'Войти снова',
      logOut: 'Выйти',
      loggedIn: 'Чтобы войти в другую учетную запись, сначала <0>выйдите</0>.',
      loggedInChangePassword:
        'Чтобы изменить пароль, зайдите в свой <0>аккаунт</0> и измените пароль там.',
      loggedOutInactivity: 'Вы вышли из системы из-за неактивности.',
      loggedOutSuccessfully: 'Вы успешно вышли из системы.',
      login: 'Войти',
      loginAttempts: 'Попытки входа',
      loginUser: 'Вход пользователя в систему',
      loginWithAnotherUser:
        'Чтобы войти в систему под другим пользователем, необходимо сначала <0>выйти</0>.',
      logout: 'Выйти',
      logoutUser: 'Вход из системы',
      newAPIKeyGenerated: 'Новый API ключ сгенерирован.',
      newAccountCreated:
        'Новый аккаунт был создан для доступа к <a href="{{serverURL}}">{{serverURL}}</a> Пожалуйста, кликните по следующей ссылке или вставьте в адресную строку браузера чтобы подтвердить email: <a href="{{verificationURL}}">{{verificationURL}}</a><br> После подтверждения вашего email, вы сможете успешно войти в систему.',
      newPassword: 'Новый пароль',
      resetPassword: 'Сброс пароля',
      resetPasswordExpiration: 'Сброс пароля по истечении срока действия',
      resetPasswordToken: 'Токен сброса пароля',
      resetYourPassword: 'Сброс вашего пароля',
      stayLoggedIn: 'Остаться в системе',
      successfullyUnlocked: 'Успешно разблокирован',
      unableToVerify: 'Невозможно подтвердить',
      verified: 'Подтверждено',
      verifiedSuccessfully: 'Успешно подтверждено',
      verify: 'Подтвердить',
      verifyUser: 'Подтвердить пользователя',
      verifyYourEmail: 'Подтвердить ваш email',
      youAreInactive:
        'Вы не были активны в течение некоторого времени и скоро автоматически выйдете из системы в целях вашей безопасности. Вы хотите остаться в системе?',
      youAreReceivingResetPassword:
        'Вы получили это сообщение, потому что вы (или кто-то другой) запросили сброс пароля для вашей учетной записи. Пожалуйста, нажмите на следующую ссылку или вставьте ее в браузер, чтобы завершить процесс:',
      youDidNotRequestPassword:
        'Если вы не запрашивали этого, пожалуйста, проигнорируйте это письмо, и ваш пароль останется неизменным.',
    },
    error: {
      accountAlreadyActivated: 'Этот аккаунт уже был активирован.',
      autosaving: 'При автосохранении этого документа возникла проблема.',
      correctInvalidFields: 'Пожалуйста, исправьте неправильные поля.',
      deletingFile: 'Произошла ошибка при удалении файла.',
      deletingTitle:
        'При удалении {{title}} произошла ошибка. Пожалуйста, проверьте соединение и повторите попытку.',
      emailOrPasswordIncorrect: 'Указанный email или пароль неверен.',
      followingFieldsInvalid_one: 'Следующее поле недействительно:',
      followingFieldsInvalid_other: 'Следующие поля недействительны:',
      incorrectCollection: 'Неправильная Коллекция',
      invalidFileType: 'Недопустимый тип файла',
      invalidFileTypeValue: 'Недопустимый тип файла: {{value}}',
      loadingDocument: 'Возникла проблема при загрузке документа с ID {{id}}.',
      missingEmail: 'Отсутствует email.',
      missingIDOfDocument: 'Отсутствующий ID документа для обновления.',
      missingIDOfVersion: 'Отсутствует ID версии.',
      missingRequiredData: 'Отсутствуют необходимые данные.',
      noFilesUploaded: 'Не было загружено ни одного файла.',
      noMatchedField: 'Не найдено подходящего поля для "{{label}}"',
      noUser: 'Нет Пользователя',
      notAllowedToAccessPage: 'Вы не имеете права доступа к этой странице.',
      notAllowedToPerformAction: 'У вас нет права на выполнение этого действия.',
      notFound: 'Запрашиваемый ресурс не найден.',
      previewing: 'При предварительном просмотре этого документа возникла проблема.',
      problemUploadingFile: 'Возникла проблема при загрузке файла.',
      tokenInvalidOrExpired: 'Токен либо недействителен, либо срок его действия истек.',
      unPublishingDocument: 'При отмене публикации этого документа возникла проблема.',
      unableToDeleteCount: 'Не удалось удалить {{count}} из {{total}} {{label}}.',
      unableToUpdateCount: 'Не удалось обновить {{count}} из {{total}} {{label}}.',
      unauthorized: 'Нет доступа, вы должны войти, чтобы сделать этот запрос.',
      unknown: 'Произошла неизвестная ошибка.',
      unspecific: 'Произошла ошибка.',
      userLocked:
        'Этот пользователь заблокирован из-за слишком большого количества неудачных попыток входа.',
      valueMustBeUnique: 'Значение должно быть уникальным',
      verificationTokenInvalid: 'Проверочный токен недействителен.',
    },
    fields: {
      addLabel: 'Добавить {{label}}',
      addLink: 'Добавить ссылку',
      addNew: 'Добавить новый',
      addNewLabel: 'Добавить {{label}}',
      addRelationship: 'Добавить Отношения',
      addUpload: 'Добавить загрузку',
      block: 'Блок',
      blockType: 'Тип Блока',
      blocks: 'Блоки',
      chooseBetweenCustomTextOrDocument:
        'Выберите между вводом пользовательского текстового URL и ссылкой на другой документ.',
      chooseDocumentToLink: 'Выберите документ для ссылки',
      chooseFromExisting: 'Выбрать из существующих',
      chooseLabel: 'Выбрать {{label}}',
      collapseAll: 'Свернуть все',
      customURL: 'Пользовательский URL',
      editLabelData: 'Редактировать данные {{label}}',
      editLink: 'Редактировать ссылку',
      editRelationship: 'Редактировать Отношения',
      enterURL: 'Введите URL',
      internalLink: 'Внутренняя ссылка',
      itemsAndMore: '{{items}} и ещё {{count}}',
      labelRelationship: '{{label}} Отношения',
      latitude: 'Широта',
      linkType: 'Тип ссылки',
      linkedTo: 'Связано с <0>{{label}}</0>',
      longitude: 'Долгота',
      newLabel: 'Новый {{label}}',
      openInNewTab: 'Открывать в новой вкладке',
      passwordsDoNotMatch: 'Пароли не совпадают.',
      relatedDocument: 'Связанный документ',
      relationTo: 'Отношение к',
      removeRelationship: 'Удалить связь',
      removeUpload: 'Удалить загруженное',
      saveChanges: 'Сохранить изменения',
      searchForBlock: 'Найти Блок',
      selectExistingLabel: 'Выберите существующий {{label}}',
      selectFieldsToEdit: 'Выберите поля для редактирования',
      showAll: 'Показать все',
      swapRelationship: 'Поменять отношения',
      swapUpload: 'Заменить загруженное',
      textToDisplay: 'Текст для отображения',
      toggleBlock: 'Переключить Блок',
      uploadNewLabel: 'Загрузить новый {{label}}',
    },
    general: {
      aboutToDelete: 'Вы собираетесь удалить {{label}} <1>{{title}}</1>. Вы уверены?',
      aboutToDeleteCount_many: 'Вы собираетесь удалить {{count}} {{label}}',
      aboutToDeleteCount_one: 'Вы собираетесь удалить {{count}} {{label}}',
      aboutToDeleteCount_other: 'Вы собираетесь удалить {{count}} {{label}}',
      addBelow: 'Добавить ниже',
      addFilter: 'Добавить фильтр',
      adminTheme: 'Тема Панели',
      and: 'А также',
      applyChanges: 'Применить изменения',
      ascending: 'Восходящий',
      automatic: 'Автоматически',
      backToDashboard: 'Назад к Панели',
      cancel: 'Отмена',
      changesNotSaved:
        'Ваши изменения не были сохранены. Если вы сейчас уйдете, то потеряете свои изменения.',
      close: 'Закрыть',
      collapse: 'Свернуть',
      collections: 'Коллекции',
      columnToSort: 'Колонка для сортировки',
      columns: 'Колонки',
      confirm: 'Подтвердить',
      confirmDeletion: 'Подтвердить удаление',
      confirmDuplication: 'Подтвердить копирование',
      copied: 'Скопировано',
      copy: 'Скопировать',
      create: 'Создать',
      createNew: 'Создать',
      createNewLabel: 'Создать новый {{label}}',
      created: 'Создано',
      createdAt: 'Дата создания',
      creating: 'Создание',
      creatingNewLabel: 'Создание нового {{label}}',
      dark: 'Тёмная',
      dashboard: 'Панель',
      delete: 'Удалить',
      deletedCountSuccessfully: 'Удалено {{count}} {{label}} успешно.',
      deletedSuccessfully: 'Удален успешно.',
      deleting: 'Удаление...',
      descending: 'Уменьшение',
      deselectAllRows: 'Снять выделение со всех строк',
      duplicate: 'Дублировать',
      duplicateWithoutSaving: 'Дублирование без сохранения изменений',
      edit: 'Редактировать',
      editLabel: 'Редактировать {{label}}',
      editing: 'Редактирование',
      editingLabel_many: 'Редактирование {{count}} {{label}}',
      editingLabel_one: 'Редактирование {{count}} {{label}}',
      editingLabel_other: 'Редактирование {{count}} {{label}}',
      email: 'Email',
      emailAddress: 'Email',
      enterAValue: 'Введите значение',
      error: 'Ошибка',
      errors: 'Ошибки',
      fallbackToDefaultLocale: 'Возврат к локали по умолчанию',
      filter: 'Фильтр',
      filterWhere: 'Где фильтровать',
      filters: 'Фильтры',
      globals: 'Глобальные',
      language: 'Язык',
      lastModified: 'Последнее изменение',
      leaveAnyway: 'Все равно уйти',
      leaveWithoutSaving: 'Выход без сохранения',
      light: 'Светлая',
      livePreview: 'Предпросмотр',
      loading: 'Загрузка',
      locale: 'Локаль',
      locales: 'Локали',
      menu: 'Меню',
      moveDown: 'Сдвинуть вниз',
      moveUp: 'Сдвинуть вверх',
      newPassword: 'Новый пароль',
      noFiltersSet: 'Фильтры не установлены',
      noLabel: 'Без метки',
      noOptions: 'Нет вариантов',
      noResults:
        'Не найдено ни одной {{label}}. Либо {{label}} еще не существует, либо ни одна из них не соответствует фильтрам, которые вы указали выше.',
      noValue: 'Нет значения',
      none: 'Никто',
      notFound: 'Не найдено',
      nothingFound: 'Ничего не найдено',
      of: 'из',
      open: 'Открыть',
      or: 'Или же',
      order: 'Порядок',
      pageNotFound: 'Страница не найдена',
      password: 'Пароль',
      payloadSettings: 'Настройки Payload',
      perPage: 'На странице: {{limit}}',
      remove: 'Удалить',
      reset: 'Сброс',
      row: 'Строка',
      rows: 'Строки',
      save: 'Сохранить',
      saving: 'Сохранение...',
      searchBy: 'Искать по',
      selectAll: 'Выбрать все {{count}} {{label}}',
      selectAllRows: 'Выбрать все строки',
      selectValue: 'Выбрать значение',
      selectedCount: '{{count}} {{label}} выбрано',
      showAllLabel: 'Показать все {{label}}',
      sorryNotFound: 'К сожалению, ничего подходящего под ваш запрос нет.',
      sort: 'Сортировать',
      sortByLabelDirection: 'Сортировать по {{label}} {{direction}}',
      stayOnThisPage: 'Остаться на этой странице',
      submissionSuccessful: 'Успешно отправлено.',
      submit: 'Отправить',
      successfullyCreated: '{{label}} успешно создан.',
      successfullyDuplicated: '{{label}} успешно продублирован.',
      thisLanguage: 'Русский',
      titleDeleted: '{{label}} {{title}} успешно удалено.',
      unauthorized: 'Нет доступа',
      unsavedChangesDuplicate:
        'У вас есть несохраненные изменения. Вы хотите продолжить дублирование?',
      untitled: 'Без названия',
      updatedAt: 'Дата правки',
      updatedCountSuccessfully: 'Обновлено {{count}} {{label}} успешно.',
      updatedSuccessfully: 'Успешно Обновлено.',
      updating: 'Обновление',
      uploading: 'Загрузка',
      user: 'пользователь',
      users: 'пользователи',
      value: 'Значение',
      welcome: 'Добро пожаловать',
    },
    operators: {
      contains: 'содержит',
      equals: 'равно',
      exists: 'существует',
      isGreaterThan: 'больше чем',
      isGreaterThanOrEqualTo: 'больше или равно',
      isIn: 'находится',
      isLessThan: 'меньше чем',
      isLessThanOrEqualTo: 'меньше или равно',
      isLike: 'похоже',
      isNotEqualTo: 'не равно',
      isNotIn: 'нет в',
      near: 'рядом',
    },
    upload: {
      crop: 'Обрезать',
      cropToolDescription:
        'Перетащите углы выбранной области, нарисуйте новую область или отрегулируйте значения ниже.',
      dragAndDrop: 'Перетащите файл',
      dragAndDropHere: 'или перетащите файл сюда',
      editImage: 'Редактировать изображение',
      fileName: 'Имя файла',
      fileSize: 'Размер файла',
      focalPoint: 'Центральная точка',
      focalPointDescription:
        'Перетащите фокусное расстояние прямо на предварительный просмотр или отрегулируйте значения ниже.',
      height: 'Высота',
      lessInfo: 'Меньше информации',
      moreInfo: 'Больше информации',
      previewSizes: 'Предварительный просмотр размеров',
      selectCollectionToBrowse: 'Выберите Коллекцию для просмотра',
      selectFile: 'Выберите файл',
      setCropArea: 'Установите область обрезки',
      setFocalPoint: 'Установить фокусное расстояние',
      sizes: 'Размеры',
      sizesFor: 'Размеры для {{label}}',
      width: 'Ширина',
    },
    validation: {
      emailAddress: 'Пожалуйста, введите корректный адрес email.',
      enterNumber: 'Пожалуйста, введите корректный номер.',
      fieldHasNo: 'У этого поля нет {{label}}',
      greaterThanMax: '{{value}} больше максимально допустимого значения {{label}} {{max}}.',
      invalidInput: 'Это поле имеет недопустимое значение.',
      invalidSelection: 'В этом поле выбран недопустимый вариант.',
      invalidSelections: "'Это поле содержит следующие неправильные варианты:'",
      lessThanMin: '{{value}} меньше минимально допустимого значения {{label}} {{min}}.',
      limitReached: 'Достигнут лимит, можно добавить только {{max}} элементов.',
      longerThanMin: 'Это значение должно быть больше минимальной длины символов: {{minLength}}.',
      notValidDate: '"{{value}}" это не действительная дата.',
      required: 'Это обязательное поле.',
      requiresAtLeast: 'Это поле требует не менее {{count}} {{label}}',
      requiresNoMoreThan: 'Это поле требует не более {{count}} {{label}}',
      requiresTwoNumbers: 'В этом поле требуется два числа.',
      shorterThanMax: 'Это значение должно быть короче максимальной длины символов {{maxLength}}.',
      trueOrFalse: 'Это поле может быть равно только true или false.',
      validUploadID: "'Это поле не является действительным ID загрузки.'",
    },
    version: {
      type: 'Тип',
      aboutToPublishSelection: 'Вы собираетесь опубликовать все {{label}} в выборе. Вы уверены?',
      aboutToRestore:
        'Вы собираетесь восстановить этот документ {{label}} в состояние, в котором он находился {{versionDate}}.',
      aboutToRestoreGlobal:
        'Вы собираетесь восстановить глобальную запись {{label}} в состояние, в котором она находилась {{versionDate}}.',
      aboutToRevertToPublished:
        'Вы собираетесь вернуть изменения этого документа к его опубликованному состоянию. Вы уверены?',
      aboutToUnpublish: 'Вы собираетесь отменить публикацию этого документа. Вы уверены?',
      aboutToUnpublishSelection:
        'Вы собираетесь отменить публикацию всех выбранных {{label}}. Вы уверены?',
      autosave: 'Автосохранение',
      autosavedSuccessfully: 'Автосохранение успешно.',
      autosavedVersion: 'Автоматически сохраненная версия',
      changed: 'Изменено',
      compareVersion: 'Сравнить версию с:',
      confirmPublish: 'Подтвердить публикацию',
      confirmRevertToSaved: 'Подтвердить возврат к сохраненному',
      confirmUnpublish: 'Подтвердить отмену публикации',
      confirmVersionRestoration: 'Подтвердить восстановление версии',
      currentDocumentStatus: 'Текущий статус {{docStatus}} документа',
      draft: 'Черновик',
      draftSavedSuccessfully: 'Черновик успешно сохранен.',
      lastSavedAgo: 'Последний раз сохранено {{distance}} назад',
      noFurtherVersionsFound: 'Другие версии не найдены',
      noRowsFound: 'Не найдено {{label}}',
      preview: 'Предпросмотр',
      problemRestoringVersion: 'Возникла проблема с восстановлением этой версии',
      publish: 'Публиковать',
      publishChanges: 'Опубликовать изменения',
      published: 'Опубликовано',
      publishing: 'Публикация',
      restoreThisVersion: 'Восстановить эту версию',
      restoredSuccessfully: 'Восстановлен успешно.',
      restoring: 'Восстановление...',
      revertToPublished: 'Вернуться к опубликованному',
      reverting: 'Возврат...',
      saveDraft: 'Сохранить черновик',
      selectLocales: 'Выберите локали для отображения',
      selectVersionToCompare: 'Выбрать версию для сравнения',
      showLocales: 'Показать локали:',
      showingVersionsFor: 'Показаны версии для:',
      status: 'Статус',
      unpublish: 'Отменить публикацию',
      unpublishing: 'Отмена публикации...',
      version: 'Версия',
      versionCount_many: '{{count}} версий найдено',
      versionCount_none: 'Версий не найдено',
      versionCount_one: '{{count}} версия найдена',
      versionCount_other: 'Найдено {{count}} версий',
      versionCreatedOn: '{{version}} создана:',
      versionID: 'ID версии',
      versions: 'Версии',
      viewingVersion: 'Просмотр версии для {{entityLabel}} {{documentTitle}}',
      viewingVersionGlobal: '`Просмотр версии для глобальной Коллекции {{entityLabel}}',
      viewingVersions: 'Просмотр версий для {{entityLabel}} {{documentTitle}}',
      viewingVersionsGlobal: '`Просмотр версии для глобальной Коллекции {{entityLabel}}',
    },
  },
}
